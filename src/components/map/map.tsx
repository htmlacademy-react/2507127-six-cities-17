import {layerGroup} from 'leaflet';
import { GeneralCategory } from '../../const';
import { CityCoordinates, OffersData } from '../../types/offers';
import { useEffect, useMemo, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { getCurrentCityData, getPointsData, getSelectedPoint } from '../../utils/offers';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { createMarker } from './marker';
import { selectActiveOfferId } from '../../store/offers-process/offers-process.selectors';

type MapProps = {
  mapClass: GeneralCategory;
  offers: OffersData[];
}

function Map({mapClass, offers}: MapProps):JSX.Element {
  const {id} = useParams();
  const activeOfferId = useAppSelector(selectActiveOfferId);
  const shouldScrollWheelZoom = useMemo(() => mapClass !== GeneralCategory.Offer, [mapClass]);

  const city = useMemo(() => getCurrentCityData(offers), [offers]) as CityCoordinates;
  const points = useMemo(() => getPointsData(offers), [offers]);
  const selectedPoint = activeOfferId !== null ? getSelectedPoint(offers, activeOfferId) : null;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, shouldScrollWheelZoom);

  useEffect(() => {
    if (map && points) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        createMarker(mapClass, point, selectedPoint, id).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, id, mapClass]);


  return (
    <section ref={mapRef} className={`${mapClass}__map map`}></section>
  );
}

export default Map;
