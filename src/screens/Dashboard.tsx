import React, { useMemo } from 'react';
import { Dimensions, Text as RNText, ScrollView, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Card, Text } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import Header from "../components/Header";
import MetricsCard from '../components/MetricsCard';
import ScreenView from "../components/ScreenView";
import { useTicket } from "../hooks/useTicket";
import { styles } from "../styles/Dashboard";
import { TicketStatus } from "../types/Ticket";

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const tickets = useTicket((state) => state.tickets);

  const metrics = useMemo(() => {
    const closed = tickets.filter(t => t.status !== TicketStatus.OPEN && t.closingDate);

    const totalMinutes = closed.reduce((acc, t) => {
      const start = new Date(t.openingDate).getTime();
      const end = new Date(t.closingDate!).getTime();
      return acc + (end - start) / 60000;
    }, 0);

    const avg = closed.length > 0 ? (totalMinutes / closed.length).toFixed(1) : "0";

    return { total: tickets.length, avg };
  }, [tickets]);

  const chartData = [
    { name: 'Abertos', population: tickets.filter(t => t.status === TicketStatus.OPEN).length, color: '#2196F3', legendFontColor: '#7F7F7F' },
    { name: 'Encerrados', population: tickets.filter(t => t.status === TicketStatus.CLOSED).length, color: '#4CAF50', legendFontColor: '#7F7F7F' },
    { name: 'Improced.', population: tickets.filter(t => t.status === TicketStatus.UNFOUNDED).length, color: '#FF9800', legendFontColor: '#7F7F7F' },
    { name: 'Cancel.', population: tickets.filter(t => t.status === TicketStatus.CANCELED).length, color: '#F44336', legendFontColor: '#7F7F7F' },
  ];

  const top5Tickets = useMemo(() => {
    return tickets
      .filter(t => t.status !== TicketStatus.OPEN && t.closingDate)
      .map(t => ({
        ...t,
        duration: (new Date(t.closingDate!).getTime() - new Date(t.openingDate).getTime()) / 60000
      }))
      .sort((a, b) => a.duration - b.duration)
      .slice(0, 5);
  }, [tickets]);

  return (
    <ScreenView>
      <Header title="Performance" />
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.metricsRow}>
          <MetricsCard title="Total Geral" value={metrics.total.toString()} />
          <MetricsCard title="Média (min)" value={`${metrics.avg.toString()}m`} />
        </View>

        <Text variant="titleLarge" style={styles.sectionTitle}>Distribuição por Status</Text>
        <PieChart
          data={chartData}
          width={width - 40}
          height={200}
          chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />

        <Text variant="titleLarge" style={styles.sectionTitle}>Top 5: Mais Rápidos</Text>
        {top5Tickets.length > 0 ? (
          <Carousel
            loop
            width={width - 40}
            height={150}
            autoPlay={true}
            autoPlayInterval={3000}
            data={top5Tickets}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Card style={styles.carouselCard}>
                <Card.Content>
                  <Text variant="titleMedium" numberOfLines={1}>{item.title}</Text>
                  <Text variant="bodySmall" style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                    Resolvido em: {item.duration.toFixed(1)} min
                  </Text>
                  <Text variant="bodyMedium" numberOfLines={2} style={{ marginTop: 8 }}>
                    {item.details}
                  </Text>
                </Card.Content>
              </Card>
            )}
          />
        ) : (
          <RNText style={styles.noData}>Encerre tickets para ver o ranking.</RNText>
        )}
      </ScrollView>
    </ScreenView>
  );
}