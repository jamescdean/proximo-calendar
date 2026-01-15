# Proximo Spirits - 2026 Media Calendar

A dynamic media calendar dashboard for Proximo Spirits to visualize and manage marketing campaigns across their portfolio of spirits brands.

![Proximo Spirits](https://proximospirits.com/wp-content/uploads/2023/12/proximo-logo-lockup.svg)

## Features

- **Visual Timeline**: Full-year calendar view with campaigns displayed as color-coded bars
- **Category Filtering**: Filter by Tequila, Whiskey, or Vodka & Rum programs
- **Admin Mode**: Password-protected editing capabilities for internal team
- **Client View**: Read-only access for external stakeholders
- **Responsive Design**: Works across desktop and tablet devices
- **Brand Colors**: Each brand has a unique color for easy identification

## Brands Included

### Tequila
- Jose Cuervo
- 1800 Tequila
- Prepared Cocktails
- Gran Coramino
- Gran Centenario

### Whiskey
- Pendleton

### Vodka & Rum
- Kraken
- Three Olives

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/proximo-media-calendar.git

# Navigate to project directory
cd proximo-media-calendar

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Railway.

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the configuration
3. Deploy!

## Admin Access

To access admin mode and edit campaigns:
- Click "Admin Login" in the header
- Password: `proximo2026`

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **Railway** - Hosting platform

## Project Structure

```
proximo-media-calendar/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── railway.toml
└── README.md
```

## License

Proprietary - Proximo Spirits

---

© 2026 Proximo Spirits. Please drink responsibly.
