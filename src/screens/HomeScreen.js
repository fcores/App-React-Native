// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  ActivityIndicator,
  Snackbar,
  Banner,
  Chip,
  Surface,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, addPost, clearAddError } from '../features/posts/postsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { items, fetchStatus, addStatus, fetchError, addError } = useSelector(
    (state) => state.posts
  );

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showFetchBanner, setShowFetchBanner] = useState(false);

  // Al montar el componente, obtener publicaciones
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Mostrar error de obtención de posts
  useEffect(() => {
    if (fetchError) {
      setShowFetchBanner(true);
    } else {
      setShowFetchBanner(false);
    }
  }, [fetchError]);

  // Mostrar error de creación si existe
  useEffect(() => {
    if (addError) {
      setSnackbarMessage(addError);
      setShowSnackbar(true);
    }
  }, [addError]);

  // Limpiar formulario cuando se crea exitosamente
  useEffect(() => {
    if (addStatus === 'succeeded') {
      setTitle('');
      setBody('');
      setShowSuccessSnackbar(true);
      setTimeout(() => {
        dispatch(clearAddError()); // Reset status
      }, 500);
    }
  }, [addStatus, dispatch]);

  const handleAddPost = () => {
    // Validar campos no vacíos
    if (!title.trim() || !body.trim()) {
      setSnackbarMessage('Por favor completa título y contenido');
      setShowSnackbar(true);
      return;
    }

    const newPost = {
      title,
      body,
      userId: 1,
    };

    dispatch(addPost(newPost));
  };

  const isFetchingPosts = fetchStatus === 'loading';
  const isAddingPost = addStatus === 'loading';

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      {/* Header mejorado con subtítulo */}
      <Surface style={styles.header} elevation={4}>
        <Text variant="headlineMedium" style={styles.headerText}>
          📱 MiniBlog de Clases
        </Text>
        <Text variant="bodyMedium" style={styles.headerSubtitle}>
          JSONPlaceholder API
        </Text>
      </Surface>

      {/* Banner de error mejorado con título y detalle */}
      <Banner
        visible={showFetchBanner}
        actions={[
          {
            label: 'Reintentar',
            onPress: () => {
              console.log('🔄 Reintentando obtener publicaciones...');
              dispatch(fetchPosts());
            },
            icon: 'reload',
          },
          {
            label: 'Cerrar',
            onPress: () => setShowFetchBanner(false),
          },
        ]}
        icon="alert-circle"
        style={styles.banner}
      >
        <View>
          <Text style={styles.bannerTitle}>
            Error de conexión
          </Text>
          <Text style={styles.bannerText}>
            No se pudieron cargar las publicaciones. Verifica tu conexión a internet y presiona "Reintentar".
          </Text>
          {fetchError && (
            <Text style={styles.bannerDetail}>
              Detalle: {fetchError}
            </Text>
          )}
        </View>
      </Banner>

      {/* Indicador de carga para GET mejorado */}
      {isFetchingPosts && items.length === 0 && (
        <Card style={styles.loadingCard}>
          <Card.Content style={styles.loadingContent}>
            <ActivityIndicator size="large" animating={true} color="#1976d2" />
            <Text variant="bodyLarge" style={styles.loadingText}>
              Cargando publicaciones…
            </Text>
          </Card.Content>
        </Card>
      )}

      {/* ScrollView para mejor manejo del teclado */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Lista de publicaciones */}
        <View style={styles.listContainer}>
          {items.length > 0 ? (
            <FlatList
              data={items}
              scrollEnabled={false}
              keyExtractor={(item, index) =>
                item.uniqueId || `post-${item.id}-${index}`
              }
              renderItem={({ item }) => (
                <Card style={styles.postCard} mode="elevated">
                  <Card.Content>
                    <Text variant="titleMedium" style={styles.postTitle}>
                      {item.title}
                    </Text>
                    <Text variant="bodyMedium" style={styles.postBody}>
                      {item.body}
                    </Text>
                  </Card.Content>
                  <Card.Actions>
                    <Chip icon="account-circle" style={styles.chip}>
                      Usuario {item.userId}
                    </Chip>
                  </Card.Actions>
                </Card>
              )}
            />
          ) : !isFetchingPosts && !fetchError ? (
            <Card style={styles.emptyCard} mode="outlined">
              <Card.Content style={styles.emptyContent}>
                <Text variant="displaySmall" style={styles.emptyIcon}>
                  📭
                </Text>
                <Text variant="titleLarge" style={styles.emptyTitle}>
                  No hay publicaciones
                </Text>
                <Text variant="bodyMedium" style={styles.emptyText}>
                  Aún no hay publicaciones en la lista. Crea tu primera publicación usando el formulario de abajo.
                </Text>
              </Card.Content>
            </Card>
          ) : null}
        </View>

        {/* Formulario de nueva publicación */}
        <Surface style={styles.form} elevation={4}>
          <Text variant="titleLarge" style={styles.formTitle}>
            ✍️ Nueva publicación
          </Text>
          
          <TextInput
            mode="outlined"
            label="Título"
            placeholder="Escribe el título..."
            value={title}
            onChangeText={setTitle}
            disabled={isAddingPost}
            style={styles.input}
            outlineColor="#1976d2"
            activeOutlineColor="#1976d2"
          />
          
          <TextInput
            mode="outlined"
            label="Contenido"
            placeholder="Escribe el contenido..."
            value={body}
            onChangeText={setBody}
            multiline
            numberOfLines={3}
            disabled={isAddingPost}
            style={styles.input}
            outlineColor="#1976d2"
            activeOutlineColor="#1976d2"
          />
          
          {/* Indicador de envío */}
          {isAddingPost && (
            <View style={styles.sendingContainer}>
              <ActivityIndicator animating={true} color="#1976d2" />
              <Text variant="bodyMedium" style={styles.sendingText}>
                Enviando publicación…
              </Text>
            </View>
          )}
          
          <Button
            mode="contained"
            onPress={handleAddPost}
            disabled={!title.trim() || !body.trim() || isAddingPost}
            loading={isAddingPost}
            icon="send"
            style={styles.button}
            buttonColor="#1976d2"
          >
            {isAddingPost ? 'Enviando...' : 'PUBLICAR'}
          </Button>
        </Surface>
      </ScrollView>

      {/* Snackbar de éxito mejorado */}
      <Snackbar
        visible={showSuccessSnackbar}
        onDismiss={() => setShowSuccessSnackbar(false)}
        duration={3500}
        style={styles.snackbarSuccess}
        action={{
          label: 'OK',
          onPress: () => setShowSuccessSnackbar(false),
          labelStyle: { color: '#fff' },
        }}
      >
        ✅ Publicación creada y agregada a la lista
      </Snackbar>

      {/* Snackbar de error mejorado */}
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => {
          setShowSnackbar(false);
          dispatch(clearAddError());
        }}
        duration={5000}
        action={{
          label: 'Entendido',
          onPress: () => {
            setShowSnackbar(false);
            dispatch(clearAddError());
          },
          labelStyle: { color: '#fff' },
        }}
        style={styles.snackbarError}
      >
        ❌ {snackbarMessage || 'Error al crear publicación. Verifica tu conexión e intenta nuevamente.'}
      </Snackbar>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#1976d2',
    marginBottom: 8,
    elevation: 4,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bbdefb',
    textAlign: 'center',
    marginTop: 4,
    fontSize: 13,
  },
  banner: {
    backgroundColor: '#ffebee',
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  bannerTitle: {
    color: '#c62828',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  bannerText: {
    color: '#d32f2f',
    fontSize: 14,
    lineHeight: 20,
  },
  bannerDetail: {
    color: '#e57373',
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
  loadingCard: {
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  loadingContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 12,
    color: '#666',
    fontSize: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  listContainer: {
    minHeight: 200,
  },
  postCard: {
    margin: 8,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  postBody: {
    color: '#666',
    lineHeight: 22,
  },
  chip: {
    marginTop: 8,
    backgroundColor: '#bbdefb',
  },
  emptyCard: {
    margin: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#e0e0e0',
  },
  emptyContent: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    color: '#424242',
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#757575',
    lineHeight: 22,
    marginBottom: 20,
  },
  form: {
    margin: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  formTitle: {
    marginBottom: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  sendingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  sendingText: {
    marginLeft: 12,
    color: '#1976d2',
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
  snackbarSuccess: {
    backgroundColor: '#2e7d32',
    marginBottom: 16,
  },
  snackbarError: {
    backgroundColor: '#c62828',
    marginBottom: 16,
  },
});

export default HomeScreen;
