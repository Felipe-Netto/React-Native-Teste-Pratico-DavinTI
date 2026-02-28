import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    metricCard: {
        flex: 1,
        margin: 6,
        borderRadius: 12,
        elevation: 2,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    value: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    labelContainer: {
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        paddingTop: 8,
        width: '80%',
        alignItems: 'center',
    },
    title: {
        color: '#757575',
        letterSpacing: 1.2,
        fontWeight: '600',
    },
});