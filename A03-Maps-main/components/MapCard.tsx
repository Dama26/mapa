import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const places = [
  {
    id: '1',
    name: 'Chichén Itzá',
    description: 'Una de las principales zonas arqueológicas mayas de la península de Yucatán.',
    latitude: 20.683056,
    longitude: -88.568611,
    image: 'https://facts.net/wp-content/uploads/2021/11/Chichen-Itza-Mayan.jpg',
  },
  {
    id: '2',
    name: 'Xcaret',
    description: 'Parque ecoarqueológico con ríos subterráneos, vida silvestre y espectáculos culturales.',
    latitude: 20.5822,
    longitude: -87.1065,
    image: 'https://th.bing.com/th/id/OIP.UpZynos_Zzc_BpP0A8hgnAHaEj?rs=1&pid=ImgDetMain',
  },
  {
    id: '3',
    name: 'Río Lagartos',
    description: 'Una localidad costera de Yucatán famosa por su reserva de flamencos rosados.',
    latitude: 21.5933604,
    longitude: -88.1615514,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flamingoes_at_R%C3%ADa_Lagartos.jpg/1920px-Flamingoes_at_R%C3%ADa_Lagartos.jpg',
  },
  {
    id: '4',
    name: 'Orizaba',
    description: 'Ciudad en el estado de Veracruz, conocida por su teleférico y el Pico de Orizaba.',
    latitude: 18.8519,
    longitude: -97.0950,
    image: 'https://th.bing.com/th/id/R.c4b626de5043f7660287dcce00053e46?rik=NX8dNYD8O7sxqA&pid=ImgRaw&r=0',
  },
  {
    id: '5',
    name: 'Cenote Popol Vuh',
    description: 'Un hermoso cenote en la península de Yucatán, ideal para nadar y explorar.',
    latitude: 20.6333,
    longitude: -89.1667,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/ef/16/cenote.jpg?w=2400&h=1800&s=1',
  },
];

export default function MapCard({ navigateTo }) {
  return (
    <FlatList
      data={places}
      horizontal
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <View style={styles.main}>
          <Text style={styles.title}>{item.name}</Text>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.desc}>{item.description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateTo(item.latitude, item.longitude)}
          >
            <Text style={styles.buttonContent}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e4e4e4',
    borderRadius: 3,
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 5,
  },
  buttonContent: {
    color: '#fff', // Cambiado a blanco
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 3,
  },
  desc: {
    fontSize: 14,
    color: '#555',
    flexWrap: 'wrap',
    padding: 5,
  },
});
