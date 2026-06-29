## Personal Projects

1. ***Healthcare Clinic Dashboard*** (Next.js 16.2.9, shadcn/ui, Tailwind CSS, TypeScript, Recharts) - A modern, accessible healthcare clinic management dashboard with real-time metrics, patient tracking, and clinic operations management.

- Clinic-optimized accessible color palette using oklch color space for perceptual uniformity
- Real-time metrics dashboard: patient count, average wait time, open exam rooms, staff status
- Interactive area charts for patient and wait time trend visualization
- Advanced outline/content management table with drag-and-drop, filtering, and pagination
- Dark mode support for 24/7 clinic operations
- Fully responsive design with intuitive UI for healthcare professionals
- Built with TypeScript for type safety and modern React patterns

You can find code here - [https://github.com/solgaezhova/shadcn-dashboard](https://github.com/solgaezhova/shadcn-dashboard).

---

# Healthcare Clinic Dashboard

A modern, accessible healthcare clinic management dashboard built with **Next.js**, **shadcn/ui**, and **Tailwind CSS**. Designed with healthcare professionals in mind, featuring an intuitive interface for patient management, real-time metrics, and clinic operations.

## Features

🏥 **Healthcare-Focused Design**
- Clinic-optimized color palette using oklch color space for perceptual uniformity
- Trustworthy blue primary colors and clean white surfaces
- Dark mode support for 24/7 clinic operations

📊 **Real-Time Metrics Dashboard**
- Patient count tracking
- Average wait time monitoring
- Open exam rooms availability
- Staff on-duty status
- Interactive area charts for trends

🗂️ **Clinic Management**
- Outline/content management table with drag-and-drop
- Advanced filtering and pagination
- Target and limit field management
- Column customization and sorting

🎨 **Built With**
- [Next.js 16.2.9](https://nextjs.org) with Turbopack
- [shadcn/ui](https://ui.shadcn.com) component library
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Recharts](https://recharts.org) for data visualization
- [TanStack React Table](https://tanstack.com/table) for table management
- TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles & theme tokens
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── app-sidebar.tsx # Main sidebar navigation
│   ├── chart-area-interactive.tsx # Patient & wait time trends
│   ├── section-cards.tsx # KPI metric cards
│   ├── data-table.tsx  # Management table
│   └── ...
├── lib/                # Utilities and helpers
└── hooks/              # Custom React hooks
```

## Color System

The dashboard uses an **oklch-based color palette** for better perceptual uniformity:

- **Primary**: Trustworthy blue (`oklch(0.46 0.12 210)`)
- **Sidebar**: Clean white (`oklch(1 0 0)`)
- **Accent**: Soft teal/mint for supportive UI (`oklch(0.92 0.03 185)`)
- **Chart Colors**: Five distinct series colors for data visualization
- **Dark Mode**: Adjusted oklch values for 24/7 usability

## Development

### Environment Setup

The project uses:
- **Turbopack** for fast builds and HMR
- **TypeScript** for type safety
- **Tailwind CSS** with clinic-focused color tokens
- **ESLint** for code quality

### Key Components

- `SidebarProvider` & `Sidebar` - Collapsible navigation
- `Chart` components - Data visualization with Recharts
- `DataTable` - Customizable table with drag-and-drop
- `Card` & `Badge` - Metric cards with color-coded borders

## Contributing

Contributions welcome! Please follow these guidelines:
1. Create a feature branch
2. Test your changes with `npm run build`
3. Commit with clear messages
4. Push and open a pull request

## License

MIT License - feel free to use this dashboard as a template for your clinic or healthcare project.

## Support

For issues, feature requests, or questions, please open an issue on GitHub.
