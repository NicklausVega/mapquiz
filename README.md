# US Geography Study Tool

A comprehensive U.S. Geography study application originally created to support my own preparation for my US Geography exam. I hope this tool proves helpful to other students striving for success in their geography studies.

## 🎯 Features

### Study Modes

* **Study Mode**: Interactive learning with labels and detailed information.
* **Practice Mode**: Test your knowledge without pressure.
* **Exam Mode**: Timed practice sessions simulating the real exam environment.

### Geographic Features

* **All 50 U.S. States**
* **Major Cities**: Washington D.C., New York City, Philadelphia, Boston, Charleston, Chicago, Austin, Richmond, Denver
* **Bodies of Water**: Atlantic Ocean, Pacific Ocean, Gulf of Mexico, Chesapeake Bay
* **Great Lakes**: Superior, Michigan, Huron, Erie, Ontario
* **Major Rivers**: Hudson, Ohio, Mississippi, Missouri, Red, Columbia, Colorado, Rio Grande
* **Mountain Ranges**: Sierra Nevada, Rocky Mountains
* **Geographic Regions**: Great Basin, Great Plains, Florida Keys, Long Island, Cape Cod
* **Countries**: Canada, Mexico
* **Special Coordinates**: 49th Parallel North

### Interactive Features

* **Visual Feedback**: Color-coded markers for correct/incorrect answers.
* **Progress Tracking**: Real-time scoring and question counter.
* **Detailed Information**: Learn about each geographic feature.
* **Responsive Design**: Works on desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mapquiz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start using the application.

## 📚 How to Use

### Study Mode

1. Select "Study Mode" from the control panel.
2. Click on any geographic feature on the map.
3. View detailed information about the selected feature.
4. Labels are visible to help you learn locations.

### Practice / Exam Mode

1. Choose "Practice Mode" or "Exam Mode."
2. The system will randomly select a feature for you to identify.
3. Click on the correct location on the map.
4. Get immediate feedback with color-coded results:

   * 🟢 **Green**: Correct answer
   * 🔴 **Red**: Incorrect answer
   * 🔵 **Blue**: Currently selected feature

### Feature List View

* Click "Feature List" to see all geographic features organized by type.
* Use this view to study and review all available features.
* Click on any feature to view its location on the map.

## 🎓 Exam Information

This tool aligns with MAP EXAM specifications:

* **Total Questions**: 25 per exam
* **Passing Score**: 80% (20 correct answers)
* **Time Limit**: Practice with time constraints similar to the actual exam.

## 🛠️ Technology Stack

* **Frontend Framework**: React 18 with TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Maps**: React Simple Maps with D3 projections
* **Icons**: Lucide React
* **Map Data**: US Atlas from TopoJSON

## 📁 Project Structure

```
mapquiz/
├── src/
│   ├── components/
│   │   ├── USMap.tsx          # Interactive map component
│   │   ├── StudyInterface.tsx # Study mode controls and scoring
│   │   └── FeatureList.tsx    # List view of all features
│   ├── data/
│   │   └── geographyFeatures.ts # Geographic feature definitions
│   ├── types/
│   │   └── geography.ts       # TypeScript type definitions
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Adding New Features

* Edit `src/data/geographyFeatures.ts`.
* Add new geographic features with coordinates and type.
* Include the feature ID in the `examFeatures` filter if it should appear in exams.

### Modifying Map Appearance

* Edit styles in `src/components/USMap.tsx`.
* Customize colors, marker sizes, and hover effects.
* Adjust map projection settings as needed.

## 🤝 Contributing

This project was developed with personal use in mind, but contributions are welcome to enhance its value for others:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

## 📝 License

This project is open-source and intended for educational purposes to assist with MAP EXAM preparation.

## 🐛 Troubleshooting

### Common Issues

**Features not appearing on map**

* Verify coordinates are within the Albers USA projection bounds.
* Check that the feature is included in the `examFeatures` array.

**Map not loading**

* Ensure you have an active internet connection.
* Check your browser console for JavaScript errors.

**Performance issues**

* The app is optimized for modern browsers.
* Recommended: recent versions of Chrome, Firefox, or Safari.

## 📞 Support

If you encounter any issues or have questions, please refer to the troubleshooting section or create an issue in the repository.
