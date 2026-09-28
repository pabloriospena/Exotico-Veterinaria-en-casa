import type { APIRoute } from 'astro';

export const prerender = false;

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export const GET: APIRoute = async () => {
  const defaultPlaceId = 'ChIJ6ZzHk-z_8U8RjLsGr1p0wM8';
  const defaultApiKey = 'AIzaSyAZXKAXuPvcCsLk5ERJgGC0BKxp05QBGfQ';

  const apiKey =
    import.meta.env.GOOGLE_PLACES_API_KEY ||
    (typeof process !== 'undefined' ? process.env.GOOGLE_PLACES_API_KEY : '') ||
    import.meta.env.VITE_GOOGLE_PLACES_API_KEY ||
    defaultApiKey;

  const placeId =
    import.meta.env.GOOGLE_PLACE_ID ||
    (typeof process !== 'undefined' ? process.env.GOOGLE_PLACE_ID : '') ||
    import.meta.env.VITE_GOOGLE_PLACE_ID ||
    defaultPlaceId;

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({
        error: 'GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not defined',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Petición al endpoint 'placeDetails' de Google Places API
    const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=name,rating,user_ratings_total,reviews&language=es&key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(googleUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return new Response(
        JSON.stringify({
          status: 'OK',
          name: data.result.name,
          rating: data.result.rating || 5.0,
          user_ratings_total: data.result.user_ratings_total || (data.result.reviews ? data.result.reviews.length : 56),
          reviews: data.result.reviews || [],
          source: 'google_places_details_api',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
          },
        }
      );
    }

    // Intento secundario con Places API (New v1)
    const newApiUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es`;
    const newApiResponse = await fetch(newApiUrl, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
      },
    });

    if (newApiResponse.ok) {
      const newApiData = await newApiResponse.json();
      if (newApiData && newApiData.reviews) {
        const formattedReviews: GoogleReview[] = newApiData.reviews.map((r: any) => ({
          author_name: r.authorAttribution?.displayName || 'Cliente de Google',
          profile_photo_url: r.authorAttribution?.photoUri || 'https://lh3.googleusercontent.com/a/default-user',
          rating: r.rating || 5,
          relative_time_description: r.relativePublishTimeDescription || 'Hace un tiempo',
          text: r.text?.text || r.originalText?.text || '',
        }));

        return new Response(
          JSON.stringify({
            status: 'OK',
            name: newApiData.displayName?.text || 'Exótico Veterinaria',
            rating: newApiData.rating || 5.0,
            user_ratings_total: newApiData.userRatingCount || formattedReviews.length,
            reviews: formattedReviews,
            source: 'google_places_v1_api',
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response(
      JSON.stringify({
        status: data.status || 'ERROR',
        error: data.error_message || 'Non-OK status from Google Places API',
        place_id: placeId,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: 'ERROR',
        error: error.message || 'Error fetching Google Places Details',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
