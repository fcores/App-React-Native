// src/components/posts/PostList.js
import React from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import { Text, Card } from 'react-native-paper';
import PostItem from './PostItem';

/**
 * Componente contenedor para la lista de posts
 * Props:
 *  - posts: array de posts
 *  - isLoading: boolean indicando si está cargando
 *  - onRefresh: función para recargar
 */
const PostList = ({ posts, isLoading, onRefresh }) => {
  // NIELSEN #1: Visibilidad del estado del sistema
  // RefreshControl para pull-to-refresh
  const refreshControl = (
    <RefreshControl
      refreshing={isLoading}
      onRefresh={onRefresh}
      colors={['#1976d2']}
      tintColor="#1976d2"
    />
  );

  // NIELSEN #2: Match sistema-mundo real
  // Mensaje claro cuando no hay posts
  const renderEmptyComponent = () => {
    if (isLoading) return null;
    
    return (
      <Card style={styles.emptyCard}>
        <Card.Content style={styles.emptyContent}>
          <Text variant="headlineSmall" style={styles.emptyEmoji}>
            📭
          </Text>
          <Text variant="bodyLarge" style={styles.emptyText}>
            {`No hay publicaciones todavía`}
          </Text>
          <Text variant="bodyMedium" style={styles.emptySubtext}>
            {`Crea la primera publicación usando el formulario de abajo`}
          </Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <FlatList
      data={posts}
      // NIELSEN #7: Flexibilidad y eficiencia
      // Key único para cada item
      keyExtractor={(item, index) =>
        item.uniqueId || `post-${item.id}-${index}`
      }
      renderItem={({ item }) => <PostItem post={item} />}
      ListEmptyComponent={renderEmptyComponent}
      refreshControl={refreshControl}
      contentContainerStyle={posts.length === 0 && styles.emptyListContainer}
      showsVerticalScrollIndicator={false}
      // NIELSEN #8: Diseño minimalista
      // Margen optimizado
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyCard: {
    marginHorizontal: 16,
    marginVertical: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  emptyContent: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#616161',
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubtext: {
    textAlign: 'center',
    color: '#9e9e9e',
    fontSize: 14,
  },
});

export default PostList;

