import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityCoordinates } from '../types/offers';
import { Map, TileLayer } from 'leaflet';
import { TileLayerLink } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityCoordinates
): Map | null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const currentCityRef = useRef<CityCoordinates>(city);

  useEffect(() => {
    if (currentCityRef.current.title !== city.title){
      map?.setView({
        lat: city.lat,
        lng: city.lng
      },
      city.zoom
      );

      currentCityRef.current = city;
    }

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        TileLayerLink.Main,
        {
          attribution: TileLayerLink.Attribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
