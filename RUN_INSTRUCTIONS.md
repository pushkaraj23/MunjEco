# Munj Eco – Run Instructions

## 1. Install dependencies

```bash
npm install
```

## 2. Firebase Setup

### Firestore

1. Open [Firebase Console](https://console.firebase.google.com) → Your project `munj-eco`
2. Go to **Firestore Database** → **Create database** (if not already)
3. Create collection: `products`
4. Add documents using the structure below (or run `node scripts/seed-firestore.js` to view sample JSON)

### Firestore: `products` collection

Categories: `pens`, `stationery`, `drinkware`

Each document:

- `name` (string)
- `slug` (string, unique)
- `category` (string, e.g. `flooring`, `furniture`, `decor`)
- `description` (string)
- `specifications` (map, optional)
- `images` (array of strings – image URLs)
- `featured` (boolean)
- `createdAt` (timestamp – use "Add field" → type: timestamp)

### Firestore: `enquiries` collection

Created automatically when users submit enquiry forms. Documents include:

- `name`, `company`, `email`, `phone`, `product`, `quantity`, `message`, `createdAt`

### Firestore indexes

- **products:** `createdAt` (Descending)
- **enquiries:** `createdAt` (Descending)

Firestore will prompt you to create indexes when first needed, or add manually in Console → Firestore → Indexes.

### Firestore Security Rules

For the **admin panel** (`/admin`) to add products and read enquiries, use:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document=**} {
      allow read: if true;
      allow write: if true;  // Admin adds products; restrict with Firebase Auth in production
    }
    match /enquiries/{document=**} {
      allow read, create: if true;  // Admin reads enquiries
    }
  }
}
```

For production, protect writes with Firebase Authentication.

### Firebase Storage (optional)

For product images:

1. Firebase Console → Storage → Get started
2. Create folder e.g. `products`
3. Upload images and use download URLs in the `images` array

## Admin Panel

- **Path:** `/admin` (no link from the site)
- **Enquiries:** View all contact form submissions
- **Products:** Add products with name, category, description, image URLs, specifications
- Ensure Firestore rules allow `read` on `enquiries` and `write` on `products` for admin use

## 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 4. Build for production

```bash
npm run build
npm start
```

## Folder structure

```
/app
  page.tsx          - Home
  layout.tsx
  globals.css
  not-found.tsx
  /admin            - Admin panel (no site link)
  /admin/enquiries  - View enquiries
  /admin/products   - Add/list products
  /products         - Products listing
  /products/[slug]  - Product detail
  /about            - About
  /contact          - Contact

/components
  Navbar, Footer, Hero
  ProductCard, ProductGrid
  CategorySection
  EnquiryForm
  CTASection, AnimatedSection
  Badge, Button

/lib
  firebase.ts
  getProducts.ts
  getEnquiries.ts
  addProduct.ts
  submitEnquiry.ts
  types.ts
```
