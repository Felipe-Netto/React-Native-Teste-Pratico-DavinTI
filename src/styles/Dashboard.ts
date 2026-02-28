import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { padding: 20, paddingBottom: 50 },
    metricsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    metricCard: { width: '48%', alignItems: 'center', elevation: 2 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
    carouselCard: { backgroundColor: '#FFF', borderRadius: 12, marginHorizontal: 5, height: 140, elevation: 3 },
    noData: { textAlign: 'center', color: '#999', marginTop: 10, fontStyle: 'italic' }
  });