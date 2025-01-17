# Cosplay Connect

Cosplay Connect is a matchmaking platform for cosplayers and photographers. It helps users connect, schedule shoots, and showcase their talents, especially around conventions. The frontend is built using Remix, making it fast and responsive.

## Features

### Core Functionality
1. **User Profiles**
   - **Cosplayers**:
     - Showcase costumes, availability, and preferences.
     - Link Instagram profiles for added exposure.
   - **Photographers**:
     - Highlight photography styles, pricing, and availability.
     - Display portfolio and booking options.

2. **Social Media Integration**
   - Import Instagram media for non-verified users.
   - Highlight "verified" profiles registered directly on the platform.

3. **Event Management**
   - Browse upcoming conventions and mark availability.
   - Tag events for easy scheduling and discovery.

4. **Matchmaking**
   - Filter profiles by tags, location, and events.
   - View profiles in a grid or swipe-based interface.

5. **Responsive Design**
   - Optimized for both desktop and mobile devices.
   - Dynamic layouts using TailwindCSS.

6. **Progressive Onboarding**
   - Step-by-step profile creation with real-time data validation.
   - Dynamic progress bar for navigation.

## Frontend Tech Stack

- Remix
- TypeScript
- TailwindCSS
- React
- OAuth 2.0
- Framer Motion

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- NPM or Yarn package manager
- Remix CLI installed globally

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cosplay-connect.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cosplay-connect
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Deployment
For production builds:
```bash
npm run build
npm start
```
Deploy on platforms like **Vercel**, **Netlify**, or any Node.js hosting provider.

## Future Enhancements
- **Testing and CI/CD**: TBD
- **Chat Integration**: Enable messaging between cosplayers and photographers.
- **Payment Gateway**: Add Stripe for booking and payments.
- **Advanced Filters**: Location-based and AI-powered recommendations.
- **Event Scraping**: Automatically populate convention data from external websites.

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or suggestions, contact the development team at **[your-email@example.com]**.

