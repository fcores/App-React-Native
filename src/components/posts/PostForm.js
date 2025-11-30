// src/components/posts/PostForm.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextInput, Button, Text, Surface, ActivityIndicator, HelperText, IconButton } from 'react-native-paper';

/**
 * Formulario de creación de posts
 * Props:
 *  - onSubmit: función que recibe { title, body }
 *  - isCreating: boolean indicando si está en proceso de creación
 *  - createSuccess: boolean indicando si la creación fue exitosa
 */
const PostForm = ({ onSubmit, isCreating, createSuccess }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');
  const [titleTouched, setTitleTouched] = useState(false);
  const [bodyTouched, setBodyTouched] = useState(false);
  
  const bodyInputRef = useRef(null);

  // Limpiar formulario cuando la creación es exitosa
  React.useEffect(() => {
    if (createSuccess) {
      setTitle('');
      setBody('');
      setTitleError('');
      setBodyError('');
      setTitleTouched(false);
      setBodyTouched(false);
    }
  }, [createSuccess]);

  // ===================================
  // NIELSEN #5: Prevención de errores
  // Validación en tiempo real
  // ===================================
  const validateTitle = (value) => {
    if (!value.trim()) {
      return 'El título es obligatorio';
    }
    if (value.trim().length < 3) {
      return 'El título debe tener al menos 3 caracteres';
    }
    if (value.trim().length > 100) {
      return 'El título no puede exceder 100 caracteres';
    }
    return '';
  };

  const validateBody = (value) => {
    if (!value.trim()) {
      return 'El contenido es obligatorio';
    }
    if (value.trim().length < 10) {
      return 'El contenido debe tener al menos 10 caracteres';
    }
    if (value.trim().length > 500) {
      return 'El contenido no puede exceder 500 caracteres';
    }
    return '';
  };

  const handleTitleChange = (text) => {
    setTitle(text);
    if (titleTouched) {
      setTitleError(validateTitle(text));
    }
  };

  const handleBodyChange = (text) => {
    setBody(text);
    if (bodyTouched) {
      setBodyError(validateBody(text));
    }
  };

  const handleTitleBlur = () => {
    setTitleTouched(true);
    setTitleError(validateTitle(title));
  };

  const handleBodyBlur = () => {
    setBodyTouched(true);
    setBodyError(validateBody(body));
  };

  // ===================================
  // NIELSEN #3: Control y libertad del usuario
  // Permitir limpiar el formulario
  // ===================================
  const handleClear = () => {
    setTitle('');
    setBody('');
    setTitleError('');
    setBodyError('');
    setTitleTouched(false);
    setBodyTouched(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    // Validar todos los campos
    const titleValidation = validateTitle(title);
    const bodyValidation = validateBody(body);

    setTitleError(titleValidation);
    setBodyError(bodyValidation);
    setTitleTouched(true);
    setBodyTouched(true);

    if (titleValidation || bodyValidation) {
      return;
    }

    // Cerrar teclado
    Keyboard.dismiss();

    // Llamar a la función del padre con los datos
    onSubmit({ title: title.trim(), body: body.trim() });
  };

  const isFormValid = title.trim().length >= 3 && body.trim().length >= 10 && !titleError && !bodyError;

  return (
    <Surface style={styles.surface} elevation={4}>
      <View style={styles.headerContainer}>
        <Text variant="titleLarge" style={styles.title}>
          {`✍️ Nueva publicación`}
        </Text>
        {/* NIELSEN #3: Control del usuario - Botón limpiar */}
        {(title || body) && !isCreating && (
          <IconButton
            icon="broom"
            size={20}
            onPress={handleClear}
            iconColor="#666"
            style={styles.clearButton}
          />
        )}
      </View>

      {/* NIELSEN #10: Ayuda y documentación */}
      <Text variant="bodySmall" style={styles.helperIntro}>
        {`Complete los datos de la nueva publicación`}
      </Text>

      {/* Campo Título con validación en tiempo real */}
      <TextInput
        mode="outlined"
        label="Título *"
        placeholder="Ej: Mi primera publicación"
        value={title}
        onChangeText={handleTitleChange}
        onBlur={handleTitleBlur}
        disabled={isCreating}
        style={styles.input}
        outlineColor={titleError && titleTouched ? '#d32f2f' : '#1976d2'}
        activeOutlineColor={titleError && titleTouched ? '#d32f2f' : '#1976d2'}
        error={titleError && titleTouched}
        left={<TextInput.Icon icon="format-title" />}
        maxLength={100}
        autoCapitalize="sentences"
        returnKeyType="next"
        onSubmitEditing={() => bodyInputRef.current?.focus()}
        blurOnSubmit={false}
      />
      {/* NIELSEN #9: Ayudar a reconocer y recuperarse de errores */}
      <HelperText type={titleError && titleTouched ? 'error' : 'info'} visible={true}>
        {titleError && titleTouched ? titleError : `${title.length}/100 caracteres`}
      </HelperText>

      {/* Campo Contenido con validación en tiempo real */}
      <TextInput
        ref={bodyInputRef}
        mode="outlined"
        label="Contenido *"
        placeholder="Escribe el contenido de tu publicación..."
        value={body}
        onChangeText={handleBodyChange}
        onBlur={handleBodyBlur}
        disabled={isCreating}
        style={styles.input}
        outlineColor={bodyError && bodyTouched ? '#d32f2f' : '#1976d2'}
        activeOutlineColor={bodyError && bodyTouched ? '#d32f2f' : '#1976d2'}
        error={bodyError && bodyTouched}
        left={<TextInput.Icon icon="text" />}
        multiline
        numberOfLines={4}
        maxLength={500}
        autoCapitalize="sentences"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {/* NIELSEN #9: Mensajes de error claros */}
      <HelperText type={bodyError && bodyTouched ? 'error' : 'info'} visible={true}>
        {bodyError && bodyTouched ? bodyError : `${body.length}/500 caracteres`}
      </HelperText>

      {/* NIELSEN #1: Visibilidad del estado del sistema */}
      {isCreating && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={true} color="#1976d2" size="small" />
          <Text variant="bodyMedium" style={styles.loadingText}>
            {`Enviando datos a la API...`}
          </Text>
        </View>
      )}

      {/* Botón de envío con mejor feedback */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleSubmit}
          disabled={!isFormValid || isCreating}
          loading={isCreating}
          icon={isCreating ? 'cloud-upload' : 'send'}
          style={[styles.button, (!isFormValid && !isCreating) && styles.buttonDisabled]}
          buttonColor={isFormValid && !isCreating ? '#1976d2' : '#999'}
          contentStyle={styles.buttonContent}
        >
          {isCreating ? 'Enviando...' : 'Publicar'}
        </Button>
        
        {/* NIELSEN #6: Reconocimiento antes que recuerdo */}
        {!isFormValid && !isCreating && (
          <HelperText type="info" visible={true} style={styles.buttonHelper}>
            {`Complete todos los campos correctamente para continuar`}
          </HelperText>
        )}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    margin: 12,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
  },
  clearButton: {
    margin: 0,
  },
  helperIntro: {
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  input: {
    marginBottom: 4,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  loadingText: {
    marginLeft: 12,
    color: '#1976d2',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 8,
  },
  button: {
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 6,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonHelper: {
    textAlign: 'center',
    marginTop: 4,
  },
});

export default PostForm;

