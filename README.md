# 🌟 JK Total Washing and Cleaning Solution

**JK Total Washing and Cleaning Solution** is a client-side ecommerce platform that provides a modern and intuitive shopping experience for a wide range of washing and cleaning products. This project leverages cutting-edge technologies to deliver fast, scalable, and responsive solutions.

---

## 🚀 Tech Stack

The project is built using the following technologies:

- **⚛️ React**: A JavaScript library for building dynamic user interfaces.
- **🔄 TanStack Query**: Managing asynchronous server-state and caching.
- **🎨 MUI (Material UI)**: A customizable component library for modern UI.
- **🛠️ Redux**: Global state management to handle complex application logic.
- **🔥 Firebase**: Provides authentication and real-time database features.
- **💅 Styled-Components**: CSS-in-JS library for styling components.
- **✅ Zod**: Schema validation for forms and APIs.
- **📱 SwiperJS**: Creating modern touch sliders.
- **📦 Other Utilities**: Enhancing development efficiency and performance.

---

## 🎨 Design

You can view the project's design on Figma: [Figma Design](https://www.figma.com/design/tyHViRpbWEsDjaCgDLicJ2/Relume-(Community)?node-id=1-4141&node-type=frame&t=22zkYgtDMUgXrmto-0)

---

## 📂 Getting Started

Follow these instructions to set up the project locally:

### **Prerequisites**

- **Node.js** version 16 or higher. To verify your Node.js version, run the following in your terminal:

  ```bash
  node -v
  ```

## 🛠️ Setup Instructions

### **Clone the repository:**

    ```bash
    git clone https://github.com/sagun03/react-shopping-ui-v2.git
    ```

### Navigate into the project directory:

```bash
    cd react-shopping-ui-v2
```

### Install dependencies:

```bash
    npm install
```

### Setup environment variables:

- Copy ```.env.example``` to create a ```.env``` file.
- Add necessary keys (e.g., Firebase credentials, API keys) in the ```.env``` file.

### Start the development server:

```bash
    npm start
```

> ⚠️ **Note:** You may need the backend server running to fetch data from the API.

### Open ```http://localhost:3000``` in your browser to view the application.


## 🤝 Contribution Guidelines

We welcome contributions! Here’s the step-by-step process to contribute:

### **1. Create a New Branch**

- **Feature branches**: `feat/jk-{ticket-number}` (e.g., `feat/jk-66`)
- **Bugfix branches**: `bug/jk-{ticket-number}` (e.g., `bug/jk-77`)

### **2. Make Your Changes**

After making changes, stage them with:

```bash
git add .
```

### **3Commit Your Changes**

Follow the commit message format:

- **Example:**

```bash
git commit -m "jk-121: Disabled checkout button when no address is added"
```

### **4Push Your Branch**

Push the branch to the remote repository:

```bash
   git push origin {your-branch-name}
```

## 💻 Code Style

Please follow the code style to maintain consistency:

### 1. Custom Hooks

To handle fetching and mutations (data operations), use custom hooks with React Query. This helps in separating concerns and keeping the code clean.

**Example:**

```javascript
import { useQuery } from '@tanstack/react-query';

export const useFetchData = (params) => {
  return useQuery(['dataKey', params], () => fetchData(params));
};
```

## 2. Redux for State Management

Use Redux to manage application-wide states like the shopping cart, user data, and more.

**Example:**

```javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
  },
});
```

## 3. Organizing Services

Place all API-related calls in the services folder, keeping the components clean from business logic.

**Example:**

```javascript
export const fetchReviews = async (productId) => {
  const response = await apiClient.get(`/reviews/${productId}`);
  return response.data;
};
```

## 🔧 Project Structure

The project is structured to ensure scalability and maintainability:

```bash
/src
  ├── components    
  │   ├── common          # Reusable common components
  │   ├── pagewise        # Components specific to each page
  │   ├── styles          # Component-specific styles
  │   └── index.js        # Export everything from the components folder
  ├── pages               # Page-specific components and logic
  ├── store               # Redux slices and store configuration
  ├── services            # API calls and service functions
  ├── styles              # Global styles and theming
  ├── utils               # Utility functions and helpers
```

## 📜 License

This project is licensed under the MIT License. For more information, see the LICENSE file.

## 📞 Contact

If you have any questions or need support, feel free to contact us at [sagunsaluja13@gmail.com](mailto:sagunsaluja13@gmail.com).

## 🤗 Contributors

We would like to acknowledge and thank the following contributors for their valuable input and collaboration:

| Name          | GitHub Link                        | Avatar                                        |
|---------------|------------------------------------|-----------------------------------------------|
| Sagun Saluja  | [sagun03](https://github.com/sagun03) | ![Sagun's Avatar](https://github.com/sagun03.png)  |
| Aseem         | [Aseem4091](https://github.com/Aseem4091) | ![Aseem's Avatar](https://github.com/Aseem4091.png) |
| Danny MB      | [dembar](https://github.com/dembar) | ![Danny's Avatar](https://github.com/dembar.png)   |
| Nitin Bawa    | [git-nitin01](https://github.com/git-nitin01) | ![Nitin's Avatar](https://github.com/git-nitin01.png) |
| Yug Bandhara  | [YugBandhara](https://github.com/YugBandhara) | ![Yug's Avatar](https://github.com/YugBandhara.png) |

---