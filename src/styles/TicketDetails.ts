import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 20, elevation: 2 },
  label: { fontSize: 11, fontWeight: 'bold', color: '#999', marginBottom: 4, marginTop: 12 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  details: { fontSize: 15, color: '#666', lineHeight: 22 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  info: { fontSize: 14, fontWeight: '600', color: '#444' },

  formCard: { backgroundColor: '#F9F9F9', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#EEE' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },

  dropdown: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    marginTop: 5,
    marginBottom: 15,
  },
  placeholderStyle: { fontSize: 16, color: '#999' },
  selectedTextStyle: { fontSize: 16, color: '#333' },

  textArea: {
    backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 8,
    padding: 12, height: 100, textAlignVertical: 'top', marginTop: 8
  },
  saveButton: { backgroundColor: '#4CAF50', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  saveButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },

  closedCard: { backgroundColor: '#E8F5E9', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#C8E6C9' },
});