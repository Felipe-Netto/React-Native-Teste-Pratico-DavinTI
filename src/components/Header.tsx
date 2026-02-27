import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../hooks/useAuth';
import { styles } from '../styles/Header';

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightContent?: React.ReactNode;
  containerStyle?: ViewStyle;
};

export default function Header({
  title = 'Tickets',
  showBackButton = false,
  onBackPress,
  containerStyle
}: HeaderProps) {
  const insets = useSafeAreaInsets();
  const { logout } = useAuth();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top || 16 }]}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.side}>
          {showBackButton && (
            <TouchableOpacity
              onPress={onBackPress}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.center}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.sideRight}>
          <Button
            icon="logout"
            onPress={() => logout()}
          >
            <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
          </Button>
        </View>
      </View>
    </View>
  );
}