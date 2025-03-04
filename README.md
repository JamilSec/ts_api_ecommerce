# 🛒 API REST de Ecommerce (TypeScript, Node.js, Express, SQL Server)

## 📌 Descripción del Proyecto

Este proyecto es una API REST para un ecommerce, desarrollada en **TypeScript** con **Node.js** y **Express**, utilizando **SQL Server** como base de datos. Se incluyen endpoints para la gestión de roles y usuarios, con pruebas unitarias e integración con **Jest** y **Supertest**. Además, la API está documentada con **Swagger**.

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** (Runtime de JavaScript)
- **TypeScript** (Tipado estático)
- **Express.js** (Framework para APIs)
- **SQL Server** (Base de datos relacional)
- **mssql** (Cliente para SQL Server en Node.js)
- **Jest** (Framework de pruebas unitarias)
- **Supertest** (Pruebas de integración para APIs REST)
- **Swagger** (Documentación interactiva de la API)

---

## 🚀 Configuración del Proyecto

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/JamilSec/ts_api_ecommerce.git
cd ts-api-ecommerce
```

### 2️⃣ **Instalar Dependencias**

```bash
npm install
```

### 3️⃣ **Configurar las Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_SERVER=tu-servidor-sql
DB_NAME=ecommerce_db
DB_USER=tu-usuario
DB_PASSWORD=tu-password
DB_PORT=1433
APP_PORT=3000
```

### 4️⃣ **Ejecutar la Base de Datos**

Ejecuta el script `database.sql` en tu SQL Server para crear la base de datos y sus tablas.

---

## 📦 Estructura del Proyecto

```plaintext
📂 ts_api_ecommerce
 ├── 📁 src
 │   ├── 📁 config           # Configuración general y DB
 │   ├── 📁 controllers      # Controladores de la API
 │   ├── 📁 middlewares      # Middlewares personalizados
 │   ├── 📁 models           # Modelos de datos (TypeScript interfaces)
 │   ├── 📁 repositories     # Acceso a la base de datos
 │   ├── 📁 routes           # Definición de rutas
 │   ├── 📁 services         # Lógica de negocio
 │   ├── 📁 utils            # Utilidades generales
 │   ├── index.ts           # Punto de entrada de la API
 ├── 📁 tests               # Pruebas unitarias e integración
 ├── 📄 README.md           # Documentación del proyecto
 ├── 📄 package.json        # Dependencias y scripts
 ├── 📄 tsconfig.json       # Configuración de TypeScript
 └── 📄 .env                # Variables de entorno (ignorado en git)
```

---

## 🔥 Ejecutar el Proyecto

### 1️⃣ **Modo Desarrollo** (Recarga automática con `ts-node-dev`)

```bash
npm run dev
```

### 2️⃣ **Compilar TypeScript y Ejecutar**

```bash
npm run build
npm start
```

### 3️⃣ **Acceder a la Documentación con Swagger**

La API tiene documentación interactiva en **Swagger**. Después de iniciar el servidor, accede a:

```plaintext
http://localhost:3000/api-docs
```

---

## 🧪 Pruebas (Unitarias e Integración)

### 1️⃣ **Ejecutar todas las pruebas**

```bash
npm test
```

### 2️⃣ **Ejecutar solo las pruebas unitarias**

```bash
npx jest tests/rol/roleService.test.ts
```

### 3️⃣ **Ejecutar pruebas de integración**

```bash
npx jest tests/integration/roleRoutes.test.ts
```

### 4️⃣ **Ver cobertura de código**

```bash
npm test -- --coverage
```

---

## 🛠️ Contribución

Si deseas contribuir a este proyecto, puedes hacer un **fork** y enviar un **pull request** con mejoras.
