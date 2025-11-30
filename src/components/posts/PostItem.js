// src/components/posts/PostItem.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Chip, Divider, Avatar } from 'react-native-paper';

/**
 * Componente presentacional para mostrar un post individual
 * Props:
 *  - post: objeto con { id, title, body, userId }
 */
const PostItem = ({ post }) => {
  // Obtener iniciales del usuario
  const getUserInitials = (userId) => {
    return `U${userId}`;
  };

  return (
    <Card style={styles.card} mode="elevated" accessible={true}>
      {/* NIELSEN #2: Match sistema-mundo real - Título claro y visible */}
      <Card.Title
        title={post.title}
        titleNumberOfLines={2}
        left={(props) => (
          <Avatar.Text
            {...props}
            size={44}
            label={getUserInitials(post.userId)}
            style={styles.avatar}
            accessible={true}
            accessibilityLabel={`Usuario ${post.userId}`}
          />
        )}
        titleStyle={styles.title}
      />
      
      {/* NIELSEN #8: Diseño minimalista - Separador sutil */}
      <Divider style={styles.divider} />
      
      <Card.Content style={styles.content}>
        {/* NIELSEN #4: Consistencia y estándares - Texto del cuerpo */}
        <Text variant="bodyMedium" style={styles.body}>
          {post.body}
        </Text>
      </Card.Content>

      <Card.Actions style={styles.actions}>
        <Chip 
          icon="account-circle" 
          style={styles.userChip} 
          textStyle={styles.chipText}
        >
          {`Usuario ${post.userId}`}
        </Chip>
        {post.id && (
          <Chip 
            icon="pound" 
            style={styles.idChip} 
            textStyle={styles.idChipText}
          >
            {`${post.id}`}
          </Chip>
        )}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  avatar: {
    backgroundColor: '#1976d2',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#212121',
    letterSpacing: 0.15,
    lineHeight: 22,
  },
  divider: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
  },
  content: {
    paddingTop: 0,
    paddingBottom: 12,
  },
  body: {
    color: '#616161',
    lineHeight: 22,
    fontSize: 14,
  },
  actions: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  userChip: {
    backgroundColor: '#e3f2fd',
    height: 32,
  },
  chipText: {
    color: '#1565c0',
    fontSize: 13,
    fontWeight: '500',
  },
  idChip: {
    backgroundColor: '#f5f5f5',
    height: 32,
  },
  idChipText: {
    color: '#616161',
    fontSize: 12,
  },
});

export default PostItem;

