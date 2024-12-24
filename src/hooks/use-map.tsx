import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityCoordinates } from '../types/offers';
import { Map, TileLayer } from 'leaflet';
import { TileLayerLink } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityCoordinates,
  shouldScrollWheelZoom: boolean
): Map | null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (map) {
      map.panTo({
        lat: city.lat,
        lng: city.lng,
      });
      map.setZoom(city.zoom);
    }
  }, [city, map]);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
        scrollWheelZoom: shouldScrollWheelZoom,
      });

      const layer = new TileLayer(
        TileLayerLink.Main,
        {
          attribution: TileLayerLink.Attribution,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, shouldScrollWheelZoom]);

  return map;
}

export default useMap;
