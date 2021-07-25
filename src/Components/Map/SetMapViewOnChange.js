import { useMap } from "react-leaflet";

function SetViewOnClick({ pos }) {
  const map = useMap();
  map.setView(pos, map.getZoom());

  return null;
}

export default SetViewOnClick;
