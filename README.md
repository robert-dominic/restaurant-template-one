# Restaurant Template

A modern, responsive restaurant website template built with Next.js 16, TypeScript, and Tailwind CSS v4. Perfect for restaurants, cafes, food businesses, or any dining establishment.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)

## Features

- **Modern UI/UX** - Clean, professional design with custom fonts
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Dynamic Menu System** - Easily manage your dishes with filtering by category
- **Featured Gallery** - Showcase your best dishes
- **Individual Dish Pages** - Detailed pages for each menu item
- **Optimized Performance** - Next.js Image optimization for fast loading  ⚡ 
- **SEO Ready** - Built with SEO best practices
- **Customer Testimonials** - Social proof section
- **About Section** - Tell your restaurant's story
- **WhatsApp Integration** - Direct customer contact

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/robert-dominic/restaurant-template-one.git
   cd restaurant-template-one
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
restaurant-template/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
|   |   ├── NavLinks.tsx
|   |   ├── CategoryNav.tsx
|   |   ├── DishCard.tsx
│   │   ├── Home.tsx
|   |   ├── MobileMenu.tsx
│   │   ├── Gallery.tsx
│   │   ├── MenuCard.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── data/
|   |   ├── menuData.ts      # menu items
│   │   └── testimonialsData.ts      # testimonials object
│   ├── hooks/
|   |   ├── useActiveSection.ts # custom hook to dynamically update the URL per active section
|   ├── lib/
|   |   ├── menu.ts  # All menu functions
│   ├── menu/
│   │   ├── [slug]/  
|   |   ├── page.tsx         # Dynamic dish pages
|   |   ├── categories/ 
|   |   ├── page.tsx         # Dynamic category pages
|   |   ├── layout.tsx       # menu layout
│   │   └── page.tsx         # Menu listing
│   ├── types/
|   ├── index.ts        # TypeScript types 
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx             # Homepage
├── public/             
│   └── menu/                # Menu item images
└── next.config.js
```

## 🎨 Customization

### 1. Update Restaurant Name & Branding

**`app/components/Navbar.tsx` & `Footer.tsx`**
```tsx
<span className="logo-text">Your Restaurant Name</span>
```

**`app/globals.css`** - Change brand color
```css
@theme {
  --color-primary: #EA6D27; 
}
```

### 2. Add Your Menu Items

Edit `app/data/menuData.ts`:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 1,
    slug: "dish-name",
    name: "Dish Name",
    description: "Dish description",
    price: 15,
    category: "mains",
    image: "/menu/mains/dish.jpg",
    isSpicy: false,       // Optional
    isVegetarian: false,  // Optional
  },
  // Add more dishes...
]
```

### 3. Update Featured Dishes

**`app/components/Gallery.tsx`**
```typescript
const featuredDishIds = [1, 2, 3, 4, 5, 6, 7, 8]  // Your dish IDs
```

### 4. Configure WhatsApp

**`app/components/WhatsAppButton.tsx`**
```tsx
const whatsappNumber = "1234567890"  // Your number
const message = "Your custom message"
```

### 5. Add Your Images

- Place images in `public/menu/[category]/`
- Update image paths in `menuData.ts`
- Supported categories: mains, starters, appetizers, desserts, drinks

## 🏗️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Styling
- **[Lucide React](https://lucide.dev/)** - Icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icons
- **Google Fonts** - Pacifico, Montserrat Alternates, Albert Sans

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

## 🔧 Configuration

### External Images

If using external image URLs (Unsplash, Pexels, etc.), configure `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-domain.com',
    },
  ],
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Robert**
- Twitter: [@_devrobert](https://twitter.com/_devrobert)

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Google Fonts for beautiful typography

---

⭐ **Star this repo if you find it helpful!**

💡 **Have questions?** Open an issue or reach out on Twitter.

🍴 **Happy coding and bon appétit!**