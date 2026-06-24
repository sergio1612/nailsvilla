# NailsVilla by Rutika

Marketing site and headless WooCommerce shop for NailsVilla press-on nails.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## WooCommerce integration (headless)

This project keeps your **Next.js frontend** and uses **WordPress + WooCommerce** only as the commerce backend (products, orders, payments).

```
nailsvilla.com (Next.js)  →  fetches products via REST API
shop.nailsvilla.com (WP)  →  checkout, payments, order admin
```

### Step 1 — Set up WordPress + WooCommerce

1. Get hosting with WordPress (Hostinger, Cloudways, or similar).
2. Install **WordPress** and **WooCommerce**.
3. Recommended URL: `https://shop.yourdomain.com` (subdomain keeps the marketing site separate).
4. In WooCommerce admin, add your press-on nail products with images, prices (INR), and descriptions.
5. Install a **India payments** plugin (e.g. Razorpay for WooCommerce) and complete test mode setup.

### Step 2 — Create REST API keys

1. In WordPress admin: **WooCommerce → Settings → Advanced → REST API**.
2. Click **Add key**.
3. Description: `NailsVilla Next.js`
4. User: your admin user
5. Permissions: **Read**
6. Copy the **Consumer key** (`ck_...`) and **Consumer secret** (`cs_...`).

### Step 3 — Connect Next.js

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Fill in the values:

```env
WOOCOMMERCE_URL=https://shop.yourdomain.com
WOOCOMMERCE_CONSUMER_KEY=ck_xxxxxxxx
WOOCOMMERCE_CONSUMER_SECRET=cs_xxxxxxxx
NEXT_PUBLIC_WOOCOMMERCE_STORE_URL=https://shop.yourdomain.com
```

3. Restart the dev server: `npm run dev`
4. Visit [http://localhost:3000/shop](http://localhost:3000/shop) — products from WooCommerce should appear.

### Step 4 — Optional category filter

To show only press-on products, create a **Press On Nails** category in WooCommerce, note its ID, and set:

```env
WOOCOMMERCE_CATEGORY_ID=15
```

### How checkout works

- Customers browse products on `/shop` in Next.js.
- **Buy now** redirects to WooCommerce checkout with the product in the cart.
- Payment and order emails are handled by WooCommerce (Razorpay, etc.).
- Rutika manages orders in the familiar WordPress admin.

### WordPress image domains

Product images are loaded from your WooCommerce host. Set `WOOCOMMERCE_URL` before building so `next.config.ts` allows that hostname. If images fail after deploy, confirm the env var is set in Vercel/hosting and rebuild.

### Custom orders (sizing + design)

Press-on nails are made to order. After checkout, collect sizing and design references via:

- WooCommerce **checkout fields** (billing notes or a product add-ons plugin), or
- WhatsApp follow-up (current workflow)

Recommended plugin for sizing uploads: **WooCommerce Product Add-Ons**.

### Troubleshooting

| Issue | Fix |
|-------|-----|
| Shop shows setup screen | Add all env vars to `.env.local` and restart |
| Products empty | Publish products in WooCommerce; check category ID |
| API error 401 | Regenerate REST API keys; use Read permission |
| Images broken | Set `WOOCOMMERCE_URL` and rebuild; check HTTPS |
| Checkout 404 | Confirm `NEXT_PUBLIC_WOOCOMMERCE_STORE_URL` matches your WP site |

## Deploy on Vercel

Deploy the Next.js app to Vercel and add the same WooCommerce env vars in **Project Settings → Environment Variables**.

Deploy WordPress/WooCommerce separately on PHP hosting (not Vercel).

