import React from 'react';
import { View } from 'react-native';
import { Card, Text, useTheme } from "react-native-paper";
import { styles } from "../styles/MetricsCard";

interface MetricsCardProps {
  title: string;
  value: string | number;
}

export default function MetricsCard({ title, value }: MetricsCardProps) {
  const theme = useTheme();

  return (
    <Card style={styles.metricCard}>
      <Card.Content style={styles.content}>
        <Text
          variant="headlineMedium"
          style={[styles.value, { color: theme.colors.primary }]}
        >
          {value}
        </Text>
        <View style={styles.labelContainer}>
          <Text
            variant="labelSmall"
            style={styles.title}
          >
            {title.toUpperCase()}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}