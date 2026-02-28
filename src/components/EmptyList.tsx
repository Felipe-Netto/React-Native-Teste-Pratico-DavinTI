import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/Home";


export default function EmptyList() {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.iconCircle}>
        <Ionicons name="receipt-outline" size={50} color="#CCC" />
      </View>
      <Text style={styles.emptyTitle}>Nenhum ticket por aqui</Text>
      <Text style={styles.emptySubtitle}>
        Os tickets que você abrir aparecerão nesta lista para acompanhamento.
      </Text>
    </View>
  );
}