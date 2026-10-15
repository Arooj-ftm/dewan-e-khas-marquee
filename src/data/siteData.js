import { Gem, UtensilsCrossed, Flower2, Car, Camera, Music } from 'lucide-react'

export const services = [
    { icon: Gem, title: 'Wedding Events', text: 'Barat, Walima, Mehndi and Engagement ceremonies, each with a beautifully crafted setup.' },
    { icon: UtensilsCrossed, title: 'Royal Catering', text: 'Desi, Continental and BBQ menus with live counters, prepared by expert chefs.' },
    { icon: Flower2, title: 'Floral Decor', text: 'Fresh flowers, crystal chandeliers and stage designs that make your day unforgettable.' },
    { icon: Car, title: 'Valet & Parking', text: 'Spacious parking and professional valet service for all your guests.' },
    { icon: Camera, title: 'Photo & Video', text: 'Cinematic shoots, drone coverage and same-day highlight films.' },
    { icon: Music, title: 'Sound & Lights', text: 'Premium DJ, LED walls and dance floor lighting.' },
]

export const packages = [
    { name: 'Silver', price: 'Rs. 2,500', features: ['200 – 400 Guests', '2 Main Dishes + Dessert', 'Classic Stage Decor', 'Free Parking'] },
    { name: 'Gold', price: 'Rs. 3,500', popular: true, features: ['400 – 700 Guests', '3 Main Dishes + 2 Desserts', 'Premium Floral Stage', 'Bridal Room + LED Wall', 'Valet Service'] },
    { name: 'Platinum', price: 'Rs. 5,000', features: ['700 – 1200 Guests', 'Live Counters + BBQ', 'Royal Theme Decor', 'Photo & Video Coverage', 'Grand Entry + Sound System'] },
]

export const stats = [
    { value: '1500+', label: 'Guest Capacity' },
    { value: '500+', label: 'Weddings Hosted' },
    { value: '15+', label: 'Years of Experience' },
    { value: '100%', label: 'Happy Families' },
]


export const menu = {
    'Main Course': [
        { name: 'Mutton Qorma', desc: 'Slow-cooked mutton in a rich, aromatic gravy.', special: true },
        { name: 'Chicken Karahi', desc: 'Tender chicken tossed with tomatoes, ginger and green chillies.' },
        { name: 'Beef Nihari', desc: 'Traditional slow-braised stew served with fresh garnish.' },
        { name: 'Chicken Handi', desc: 'Creamy, mildly spiced chicken cooked in a clay pot.' },
        { name: 'Daal Mash', desc: 'Classic lentils finished with butter and fried onions.' },
        { name: 'Mixed Vegetables', desc: 'Seasonal vegetables cooked in light, flavourful spices.' },
    ],
    'BBQ & Starters': [
        { name: 'Chicken Malai Boti', desc: 'Creamy, marinated chicken grilled over charcoal.', special: true },
        { name: 'Seekh Kabab', desc: 'Minced meat skewers seasoned with house spices.' },
        { name: 'Fish Fry', desc: 'Crispy golden fish with a tangy masala coating.' },
        { name: 'Chicken Spring Rolls', desc: 'Crunchy rolls served with sweet chilli sauce.' },
        { name: 'Chicken Wings', desc: 'Smoky, spicy wings straight from the grill.' },
        { name: 'Hot & Sour Soup', desc: 'A warm, tangy soup to begin the meal.' },
    ],
    'Rice & Bread': [
        { name: 'Chicken Biryani', desc: 'Fragrant basmati layered with spiced chicken.', special: true },
        { name: 'Mutton Pulao', desc: 'Delicately flavoured rice cooked in rich mutton stock.' },
        { name: 'Zarda', desc: 'Sweet saffron rice garnished with dry fruits.' },
        { name: 'Kashmiri Naan', desc: 'Soft naan stuffed with nuts and dried fruits.' },
        { name: 'Roghni Naan', desc: 'Sesame-topped, freshly baked in the tandoor.' },
        { name: 'Plain Naan', desc: 'Warm, soft and served fresh.' },
    ],
    Desserts: [
        { name: 'Gulab Jamun', desc: 'Soft milk dumplings soaked in saffron syrup.', special: true },
        { name: 'Kheer', desc: 'Creamy rice pudding with cardamom and pistachios.' },
        { name: 'Gajar Halwa', desc: 'Slow-cooked carrot dessert with khoya and nuts.' },
        { name: 'Kulfi', desc: 'Traditional frozen dessert with a rich, creamy taste.' },
        { name: 'Ice Cream Counter', desc: 'A live counter with a variety of flavours.' },
        { name: 'Fruit Trifle', desc: 'Layers of custard, cream and fresh fruit.' },
    ],
    Beverages: [
        { name: 'Green Tea (Kehwa)', desc: 'Warm, aromatic tea served after the meal.', special: true },
        { name: 'Doodh Patti Chai', desc: 'Classic milk tea, brewed fresh.' },
        { name: 'Soft Drinks', desc: 'Chilled bottles served throughout the event.' },
        { name: 'Mint Margarita', desc: 'Refreshing mint and lemon cooler.' },
        { name: 'Fresh Juice Station', desc: 'Seasonal fresh juices, served chilled.' },
        { name: 'Mineral Water', desc: 'Bottled water available on every table.' },
    ],
}