import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Shops() {

  return (
    <div>
      <MapContainer style={{height: "300px", borderRadius: "30px", margin: "10%"}} center={[59.435, 24.754]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.441, 24.734]}>
          <Popup>
            Balti jaama Turg. <br /> .
          </Popup>
        </Marker>

        <Marker position={[59.435, 24.754]}>
          <Popup>
            Viru keskus. <br /> Avatud 9-22.
          </Popup>
        </Marker>

        <Marker position={[59.422, 24.792]}>
          <Popup>
            Ülemiste keskus. <br /> Avatud 9-22.
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default Shops