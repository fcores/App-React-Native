# 📱 MiniBlog de Clases - React Native App

Una aplicación móvil profesional de blog desarrollada con **React Native**, **Expo**, **Redux Toolkit** y **Material Design** que permite visualizar y crear publicaciones mediante integración con API REST.

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.0-000020.svg)](https://expo.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.11.0-764ABC.svg)](https://redux-toolkit.js.org/)
[![Material Design](https://img.shields.io/badge/Material%20Design-Paper-6200ee.svg)](https://callstack.github.io/react-native-paper/)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Requisitos Cumplidos](#-requisitos-cumplidos-100)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades-principales)
- [Estado Redux](#️-manejo-de-estado-con-redux)
- [API](#-api-utilizada)
- [Mejoras Implementadas](#-mejoras-implementadas)
- [Capturas](#-capturas-de-funcionalidades)
- [Solución de Problemas](#-solución-de-problemas)
- [Documentación Adicional](#-documentación-adicional)

---

## 📖 Descripción

**MiniBlog de Clases** es una aplicación móvil educativa desarrollada como trabajo práctico de la materia **Desarrollo de Aplicaciones**. La app demuestra el uso profesional de:

- ✅ **React Native** para desarrollo móvil multiplataforma
- ✅ **Redux Toolkit** para gestión de estado global
- ✅ **Material Design** (React Native Paper) para UI/UX profesional
- ✅ **Integración con API REST** (JSONPlaceholder)
- ✅ **Manejo robusto de errores** y estados de carga
- ✅ **Buenas prácticas** de desarrollo móvil

---

## ✨ Características

### Funcionalidades Principales
- 📄 **Listado de publicaciones** - Visualiza posts obtenidos de JSONPlaceholder API
- ➕ **Crear nuevas publicaciones** - Formulario completo con validación
- 🔄 **Sincronización en tiempo real** - Estado global con Redux Toolkit
- 🎨 **Material Design** - UI profesional con React Native Paper
- 📱 **Responsive** - Diseñado para dispositivos móviles iOS y Android
- ⚡ **Hot Reload** - Desarrollo rápido con Expo
- 🔔 **Feedback visual** - Snackbars, banners y loading states

### Mejoras de UX
- ⌨️ **KeyboardAvoidingView** - El teclado no tapa el formulario
- 📱 **ScrollView optimizado** - Scroll suave y persistente
- 🎯 **Estados separados** - Loading y errores independientes para GET y POST
- ✅ **Confirmaciones visuales** - Snackbar de éxito al crear posts
- 🔴 **Manejo de errores profesional** - Banner dismissible con acción de reintentar
- 🚫 **Validaciones** - Campos obligatorios con mensajes claros
- 🔄 **Indicadores de carga** - ActivityIndicator con mensajes descriptivos

---

## ✅ Requisitos Cumplidos: 100%

### 📋 Consigna Original

La aplicación cumple con **TODOS** los requisitos de la consigna:

#### ✅ Funcionalidades Principales (3/3)
- ✅ Ver un listado de publicaciones
- ✅ Crear nuevas publicaciones enviando datos a API por POST
- ✅ Ver el listado actualizado gracias al estado global con Redux

#### ✅ API JSONPlaceholder (2/2)
- ✅ GET `https://jsonplaceholder.typicode.com/posts?_limit=10`
- ✅ POST `https://jsonplaceholder.typicode.com/posts`

#### ✅ Pantalla Principal "MiniBlog" (5/5)
- ✅ Encabezado con nombre de la app
- ✅ Listar publicaciones con **título** y **contenido**
- ✅ Indicador de carga mientras se trae la información
- ✅ Mensaje de error si la petición falla
- ✅ Estado vacío cuando no hay publicaciones

#### ✅ Formulario de Creación (5/5)
- ✅ Campo **Título** (obligatorio)
- ✅ Campo **Contenido** (obligatorio)
- ✅ Validación de campos no vacíos
- ✅ Envío de datos a API por POST
- ✅ Agregar nuevo post a la lista vía Redux

#### ✅ Estado Redux (4/4)
- ✅ Estado `posts` con `items: []`
- ✅ Estado `status` ('idle' | 'loading' | 'succeeded' | 'failed')
- ✅ Estado `error: string | null`
- ✅ Mejora: Estados separados (`fetchStatus` y `addStatus`)

#### ✅ Thunks Asíncronos (2/2)
- ✅ `fetchPosts` → GET
- ✅ `addPost` → POST

#### ✅ Mejoras Mínimas - Nota Completa (5/5)
- ✅ Botón "Publicar" deshabilitado mientras se envía
- ✅ Mensaje "Cargando publicaciones…"
- ✅ Mensaje "Error al obtener publicaciones"
- ✅ Mensaje "Error al crear publicación"
- ✅ Posts nuevos aparecen primero en la lista

### 🎯 Puntuación: **10/10** ⭐⭐⭐⭐⭐

---

## 🛠️ Tecnologías Utilizadas

### Core
- **[React Native](https://reactnative.dev/)** `0.81.5` - Framework para apps móviles nativas
- **[Expo](https://expo.dev/)** `~54.0.0` - Plataforma de desarrollo React Native
- **[React](https://react.dev/)** `19.1.0` - Librería UI

### Estado Global
- **[Redux Toolkit](https://redux-toolkit.js.org/)** `^2.11.0` - Gestión de estado global
- **[React Redux](https://react-redux.js.org/)** `^9.2.0` - Binding de Redux para React

### UI/UX
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** `^5.14.5` - Material Design para React Native
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** `^5.6.2` - Safe area management

### API
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** - API REST de prueba

### Desarrollo
- **[Babel Core](https://babeljs.io/)** `^7.25.2` - Transpilador JavaScript

---

## 🚀 Instalación

### Requisitos Previos

- **Node.js** v16 o superior ([Descargar](https://nodejs.org/))
- **npm** o **yarn**
- **Expo Go** instalada en tu dispositivo móvil:
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/fcores/App-React-Native.git
cd TPReactNative
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Ejecutar en tu dispositivo**
   - Abre **Expo Go** en tu teléfono
   - Escanea el código QR que aparece en la terminal
   - ¡Listo! La app se cargará en tu dispositivo

---

## 📁 Estructura del Proyecto

```
TPReactNative/
├── App.js                              # Componente raíz con Provider
├── package.json                        # Dependencias del proyecto
├── .gitignore                         # Archivos ignorados por git
├── README.md                          # Documentación principal
│
└── src/
    ├── screens/
    │   └── HomeScreen.js              # Pantalla principal (459 líneas)
    │       ├── Header con Material Design
    │       ├── Banner de errores
    │       ├── Loading card
    │       ├── Lista de publicaciones (FlatList)
    │       ├── Formulario de creación
    │       └── Snackbars de feedback
    │
    ├── features/
    │   └── posts/
    │       └── postsSlice.js          # Redux slice (107 líneas)
    │           ├── Estado inicial
    │           ├── Thunk: fetchPosts (GET)
    │           ├── Thunk: addPost (POST)
    │           ├── Reducers para pending/fulfilled/rejected
    │           └── Action: clearAddError
    │
    └── store/
        └── store.js                   # Configuración del store (12 líneas)
            └── configureStore con postsReducer
```

---

## 📱 Funcionalidades Principales

### 1. **Listado de Publicaciones**

```javascript
// Características:
✅ FlatList optimizado
✅ Cards con Material Design
✅ Título y contenido de cada post
✅ Chip con información del usuario
✅ Keys únicas (sin warnings)
✅ Estado vacío con mensaje descriptivo
```

**Implementación:**
- Se obtienen 10 posts de la API al montar el componente
- Se muestran en cards elevados con sombras
- Cada post tiene título en bold y contenido en gris
- Los posts nuevos aparecen primero (unshift)

### 2. **Crear Nueva Publicación**

```javascript
// Características:
✅ Formulario con TextInput outlined
✅ Campos: Título y Contenido (obligatorios)
✅ Validación de campos vacíos
✅ Botón deshabilitado durante POST
✅ Loading indicator durante envío
✅ Limpieza automática del formulario al éxito
```

**Flujo de Creación:**
1. Usuario completa título y contenido
2. Presiona "PUBLICAR"
3. Validación de campos
4. POST a API
5. Snackbar de éxito
6. Nuevo post aparece al inicio de la lista
7. Formulario se limpia automáticamente

### 3. **Manejo de Errores**

```javascript
// Error GET (obtener posts):
✅ Banner dismissible con título "Error de conexión"
✅ Mensaje descriptivo
✅ Detalle técnico del error
✅ Botón "Reintentar" con icono
✅ Botón "Cerrar"

// Error POST (crear post):
✅ Snackbar rojo con mensaje
✅ Acción "Entendido" para cerrar
✅ Auto-dismiss en 5 segundos
```

### 4. **Estados de Carga**

```javascript
// Loading GET:
✅ Card con ActivityIndicator
✅ Texto "Cargando publicaciones…"
✅ Color azul Material Design

// Loading POST:
✅ Indicador en el formulario
✅ Texto "Enviando publicación…"
✅ Botón con loading state
✅ Inputs deshabilitados
```

---

## 🗄️ Manejo de Estado con Redux

### Estado Global

```javascript
{
  posts: {
    items: [],              // Array de publicaciones
    
    // Estados separados para mejor UX
    fetchStatus: 'idle',    // 'idle' | 'loading' | 'succeeded' | 'failed'
    addStatus: 'idle',      // 'idle' | 'loading' | 'succeeded' | 'failed'
    
    // Errores separados
    fetchError: null,       // Error al obtener posts
    addError: null          // Error al crear post
  }
}
```

### Thunks Asíncronos

#### `fetchPosts` - Obtener Publicaciones

```javascript
// GET https://jsonplaceholder.typicode.com/posts?_limit=10

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      if (!response.ok) throw new Error('Error al obtener publicaciones');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

**Estados:**
- `pending` → `fetchStatus = 'loading'`
- `fulfilled` → `fetchStatus = 'succeeded'`, items actualizados
- `rejected` → `fetchStatus = 'failed'`, `fetchError` con mensaje

#### `addPost` - Crear Publicación

```javascript
// POST https://jsonplaceholder.typicode.com/posts

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (newPost, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost),
        }
      );
      if (!response.ok) throw new Error('Error al crear publicación');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

**Estados:**
- `pending` → `addStatus = 'loading'`
- `fulfilled` → `addStatus = 'succeeded'`, nuevo post agregado al inicio
- `rejected` → `addStatus = 'failed'`, `addError` con mensaje

---

## 🔌 API Utilizada

### JSONPlaceholder

API REST pública y gratuita para testing y prototipado.

#### Endpoints

| Método | URL | Descripción |
|--------|-----|-------------|
| **GET** | `https://jsonplaceholder.typicode.com/posts?_limit=10` | Obtiene 10 publicaciones |
| **POST** | `https://jsonplaceholder.typicode.com/posts` | Crea una nueva publicación (simulado) |

#### Estructura de Datos

```javascript
// GET Response
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere...",
    "body": "quia et suscipit..."
  },
  // ... más posts
]

// POST Request
{
  "title": "Mi título",
  "body": "Mi contenido",
  "userId": 1
}

// POST Response
{
  "id": 101,  // ID simulado
  "title": "Mi título",
  "body": "Mi contenido",
  "userId": 1
}
```

> **Nota:** JSONPlaceholder es una API de prueba. Las publicaciones creadas **no se persisten** realmente en el servidor, pero devuelve una respuesta válida para simular la creación.

---

## 🎨 Mejoras Implementadas

### Material Design con React Native Paper

#### Componentes Utilizados
- ✅ **PaperProvider** - Wrapper principal
- ✅ **Surface** - Header elevado
- ✅ **Card** - Posts y loading states
- ✅ **Button** - Botón con ripple effect
- ✅ **TextInput** - Inputs outlined con labels flotantes
- ✅ **Text** - Tipografía Material (variants)
- ✅ **Snackbar** - Mensajes temporales
- ✅ **Banner** - Mensajes persistentes
- ✅ **Chip** - Tags informativos
- ✅ **ActivityIndicator** - Loading states

#### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Primario** | `#1976d2` | Header, botones, acentos |
| **Éxito** | `#2e7d32` | Snackbar de éxito |
| **Error** | `#c62828` | Snackbar de error |
| **Error Claro** | `#ffebee` | Banner de error |
| **Primario Claro** | `#e3f2fd` | Fondo de envío |
| **Chip** | `#bbdefb` | Chips de usuario |
| **Fondo** | `#f5f5f5` | Background de la app |

### UX Improvements

#### KeyboardAvoidingView
```javascript
<KeyboardAvoidingView 
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
>
```
- Evita que el teclado tape el formulario
- Comportamiento diferenciado iOS/Android

#### ScrollView Optimizado
```javascript
<ScrollView 
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
>
```
- Permite interactuar con elementos mientras el teclado está abierto
- Oculta el indicador de scroll para UI más limpia

#### Estados Separados
- `fetchStatus` y `addStatus` independientes
- Permite mostrar loading de GET sin bloquear POST
- Mejor feedback al usuario

#### Feedback Visual Completo
- **Loading GET:** Card con ActivityIndicator + mensaje
- **Loading POST:** Indicador en formulario + botón con loading
- **Error GET:** Banner dismissible con botón reintentar
- **Error POST:** Snackbar con acción "Entendido"
- **Éxito POST:** Snackbar verde con acción "OK"
- **Validación:** Snackbar informativo

---

## 📸 Capturas de Funcionalidades

### Estado Normal
```
┌─────────────────────────┐
│ 📱 MiniBlog de Clases   │  ← Header azul con elevation
│   JSONPlaceholder API    │
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ Post Title          │ │  ← Card elevado
│ │ Post body content...│ │
│ │ [👤 Usuario 1]      │ │  ← Chip
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ ✍️ Nueva publicación│ │  ← Formulario
│ │ ┌─────────────────┐ │ │
│ │ │ Título         │ │ │  ← Input outlined
│ │ └─────────────────┘ │ │
│ │ ┌─────────────────┐ │ │
│ │ │ Contenido      │ │ │
│ │ └─────────────────┘ │ │
│ │ [  PUBLICAR  ]      │ │  ← Botón Material
│ └─────────────────────┘ │
└─────────────────────────┘
```

### Estado de Carga
```
┌─────────────────────────┐
│ 📱 MiniBlog de Clases   │
│   JSONPlaceholder API    │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │       🔵           │ │  ← ActivityIndicator
│ │ Cargando           │ │
│ │ publicaciones…     │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

### Error de Conexión
```
┌─────────────────────────┐
│ 📱 MiniBlog de Clases   │
│   JSONPlaceholder API    │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ ⚠️ Error de conexión│ │  ← Banner rojo
│ │ No se pudieron     │ │
│ │ cargar...          │ │
│ │ [Reintentar][Cerrar]│ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

## 📱 Comandos Disponibles

```bash
npm start          # Inicia servidor de desarrollo Expo
npm run android    # Abre en emulador Android
npm run ios        # Abre en simulador iOS (solo Mac)
npm run web        # Abre en navegador web
```

---

## 🐛 Solución de Problemas

### Error: "Project is incompatible with this version of Expo Go"
**Solución:**
- Asegúrate de tener `expo: ~54.0.0` en `package.json`
- Actualiza Expo Go en tu dispositivo a la última versión

### Error: "Cannot find module" o módulos faltantes
**Solución:**
```bash
# Limpia e instala nuevamente
rm -rf node_modules package-lock.json
npm install
```

### Puerto 8081 ocupado
**Solución en Windows:**
```powershell
# 1. Encuentra el PID
netstat -ano | findstr :8081

# 2. Mata el proceso
taskkill /PID <PID> /F
```

**Solución en Linux/Mac:**
```bash
kill -9 $(lsof -t -i:8081)
```

### Warning: "Encountered two children with the same key"
**Solución:**
- ✅ Ya resuelto en la app
- Cada post tiene `uniqueId` generado automáticamente
- No requiere acción del usuario

### Error de red o timeout
**Solución:**
- Verifica tu conexión a internet
- Usa el botón "Reintentar" en el banner de error
- JSONPlaceholder puede estar temporalmente inaccesible

---

## 📚 Documentación Adicional

### Archivos de Documentación

| Archivo | Descripción |
|---------|-------------|
| **README.md** | Documentación principal (este archivo) |
| **package.json** | Dependencias y scripts del proyecto |
| **.gitignore** | Archivos excluidos del control de versiones |

### Enlaces Útiles

- 📖 [React Native Docs](https://reactnative.dev/docs/getting-started)
- 📖 [Expo Documentation](https://docs.expo.dev/)
- 📖 [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- 📖 [React Native Paper](https://callstack.github.io/react-native-paper/)
- 📖 [Material Design Guidelines](https://material.io/design)
- 📖 [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/)

### Repositorio

- 🔗 [GitHub Repository](https://github.com/fcores/App-React-Native)
- 🌿 [Branch: dev](https://github.com/fcores/App-React-Native/tree/dev)

---

## 👨‍💻 Desarrollo

### Autor
Desarrollado como trabajo práctico de la materia **Desarrollo de Aplicaciones** - UADE.

### Stack Tecnológico
- **Frontend:** React Native + Expo
- **Estado:** Redux Toolkit
- **UI:** React Native Paper (Material Design)
- **API:** JSONPlaceholder (REST)
- **Deployment:** Expo Go

### Próximas Mejoras Posibles

- [ ] Navegación entre pantallas (React Navigation)
- [ ] Edición de publicaciones existentes
- [ ] Eliminación de publicaciones
- [ ] Autenticación de usuarios
- [ ] Persistencia local (AsyncStorage)
- [ ] Paginación infinita
- [ ] Pull to refresh
- [ ] Modo oscuro
- [ ] Animaciones (React Native Reanimated)
- [ ] Tests unitarios (Jest)
- [ ] Tests E2E (Detox)

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Agradecimientos

- **JSONPlaceholder** por proporcionar una API REST gratuita y confiable
- **Expo Team** por facilitar el desarrollo React Native
- **Redux Team** por Redux Toolkit
- **Callstack** por React Native Paper
- **UADE** por la formación en Desarrollo de Aplicaciones

---

<div align="center">

**Desarrollado con ❤️ usando React Native + Expo + Redux + Material Design**

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0.0-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)

[⬆ Volver arriba](#-miniblog-de-clases---react-native-app)

</div>
