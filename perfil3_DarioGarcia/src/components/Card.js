import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image, description, status, species, gender, origin }) => {
  // Color del indicador según el estado del personaje
  const getStatusColor = (currentStatus) => {
    switch (currentStatus?.toLowerCase()) {
      case 'alive':
        return '#10b981'; // Verde
      case 'dead':
        return '#ef4444'; // Rojo
      default:
        return '#94a3b8'; // Gris / Desconocido
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: getStatusColor(status) },
            ]}
          />
          <Text style={styles.statusText}>
            {status} - {species}
          </Text>
        </View>

        {description ? (
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        ) : null}

        <View style={styles.extraInfo}>
          {gender ? (
            <Text style={styles.detailText}>
              <Text style={styles.label}>Género: </Text>
              {gender}
            </Text>
          ) : null}
          {origin ? (
            <Text style={styles.detailText} numberOfLines={1}>
              <Text style={styles.label}>Origen: </Text>
              {origin}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  image: {
    width: '100%',
    height: 220,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  description: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 8,
  },
  extraInfo: {
    marginTop: 4,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  detailText: {
    fontSize: 13,
    color: '#334155',
    marginBottom: 3,
  },
  label: {
    fontWeight: '700',
    color: '#64748b',
  },
});

export default Card;
