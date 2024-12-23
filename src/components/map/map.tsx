import {layerGroup} from 'leaflet';
import { GeneralCategory } from '../../const';
import { OffersData, PointCoordinates } from '../../types/offers';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { getCurrentCityData, getPointsData, getSelectedPoint } from '../../utils/offers';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { createMarker } from './marker';

type MapProps = {
  mapClass: GeneralCategory;
  offers: OffersData[];
}

function Map({mapClass, offers}: MapProps):JSX.Element {
  const {id} = useParams();
  const activeOfferId = useAppSelector((state) => state.activeOfferId);
  const shouldScrollWheelZoom = mapClass !== GeneralCategory.Offer;

  const city = getCurrentCityData(offers);
  const points = getPointsData(offers);
  const selectedPoint = activeOfferId !== null ? getSelectedPoint(offers, activeOfferId) : null;

  if (mapClass === GeneralCategory.Offer && id) {
    const currentPoint = getSelectedPoint(offers, id);
    points.push(currentPoint as PointCoordinates);
  }

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, shouldScrollWheelZoom);

  useEffect(() => {
    if (map) {
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
