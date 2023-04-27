const TOPICS = [
  "A notification system that provides personalized product recommendations based on a user's browsing history and purchase behavior.",
  'An SMS notification system that sends reminders for upcoming appointments or events, with customizable scheduling options.',
  'An email notification system that uses machine learning algorithms to predict which users are most likely to unsubscribe, and sends targeted campaigns to retain them.',
  'A push notification system that integrates with popular social media platforms and sends personalized alerts for new posts or interactions.',
  'A notification system that alerts users to changes in stock prices, cryptocurrency values, or other financial metrics.',
  'A chatbot that uses natural language processing to interpret user inquiries and provides relevant notifications based on their request.',
  'A notification system that uses geolocation data to send targeted promotions to users in specific locations or regions.',
  'An email notification system that automatically personalizes email content based on user behavior and interests.',
  'A push notification system that integrates with smart home devices and sends alerts for events such as power outages or system malfunctions.',
  'A notification system that uses sentiment analysis to interpret user reviews or feedback and sends relevant notifications to customer support teams.',
  'An SMS notification system that uses gamification to incentivize users to complete tasks or engage with brands.',
  "A push notification system that sends customized content recommendations based on a user's music or media preferences.",
  'A notification system that integrates with wearables and sends real-time alerts for health or fitness-related data.',
  "An email notification system that sends targeted promotions based on a user's previous purchase history and shopping behavior.",
  'A push notification system that uses augmented reality technology to provide interactive and immersive content experiences.',
  'A notification system that sends real-time alerts for weather events, natural disasters, or other emergency situations.',
  'An SMS notification system that integrates with online ordering systems and sends order updates and delivery information.',
  'A push notification system that sends reminders for upcoming appointments or meetings, with calendar integration.',
  'A notification system that uses machine learning algorithms to predict user behavior and send proactive recommendations for future actions.',
  'An email notification system that integrates with popular productivity tools and sends task reminders or project updates.',
  'A push notification system that integrates with transportation apps and sends real-time transit updates or traffic alerts.',
  'A notification system that sends alerts for deals or discounts at nearby stores or restaurants, using geolocation data.',
  'An SMS notification system that integrates with banking or financial apps and sends real-time alerts for account balances or transaction updates.',
  'A push notification system that uses artificial intelligence to interpret user images and provide personalized content recommendations.',
  'A notification system that uses machine learning algorithms to predict user preferences and send customized content recommendations.',
  'An email notification system that sends real-time updates for sports scores, news headlines, or other breaking stories.',
  'A push notification system that integrates with healthcare apps and sends reminders for medication or appointment schedules.',
  'A notification system that uses blockchain technology to securely and transparently send notifications and track user behavior.',
  'An SMS notification system that integrates with delivery or courier services and sends package tracking updates or estimated delivery times.',
  'A push notification system that uses natural language processing to interpret user intent and provide relevant content recommendations.',
  "A notification system that sends alerts for job openings or career opportunities based on a user's skills and experience.",
  'An email notification system that uses machine learning algorithms to predict user engagement and send optimized email campaigns.',
  'A push notification system that integrates with travel apps and sends real-time flight or itinerary updates',
  'A notification system that integrates with smart home devices and sends alerts for home security breaches or unusual activity.',
  'An SMS notification system that sends reminders for prescription refills or medication schedules, with dosage information.',
  'A push notification system that uses natural language processing to interpret user emotions and send empathetic responses.',
  'A notification system that integrates with e-commerce platforms and sends targeted promotions based on user shopping history and preferences.',
  'An email notification system that sends automated feedback surveys and generates insights for improving customer experience.',
  'A push notification system that uses augmented reality technology to provide interactive product demos or tutorials.',
  'A notification system that integrates with weather APIs and sends alerts for severe weather conditions or natural disasters.',
  'An SMS notification system that integrates with ride-hailing services and sends real-time updates for driver location and ETA.',
  'A push notification system that uses machine learning algorithms to predict user behavior and send timely and relevant notifications.',
  'A notification system that sends reminders for bill payments or subscription renewals, with payment links and instructions.',
  'An email notification system that integrates with event management software and sends reminders and updates for event attendees.',
  'A push notification system that integrates with social impact organizations and sends alerts for volunteer opportunities or donation campaigns.',
  'A notification system that integrates with e-commerce platforms and sends personalized recommendations for related products.',
  'An SMS notification system that sends location-based alerts for nearby events or promotions.',
  'A push notification system that uses voice recognition technology to interpret user commands and provide relevant content or actions.',
  'A notification system that uses machine learning algorithms to identify and send targeted content to specific user segments.',
  'An email notification system that sends customized newsletters based on user interests and behavior.',
  'A push notification system that integrates with smart home devices and sends alerts for maintenance or upkeep needs.',
  'A notification system that sends alerts for potential security threats or data breaches based on user activity.',
  'An SMS notification system that uses chatbot technology to provide customer support or assistance.',
  'A push notification system that sends customized news updates based on user interests and reading behavior.',
  'A notification system that uses natural language processing to interpret user feedback and send relevant notifications to brand managers or customer support teams.',
  'An email notification system that uses machine learning algorithms to identify and remove potential spam or fraudulent emails.',
  'A push notification system that integrates with weather apps and sends real-time weather updates or alerts.',
  'A notification system that sends alerts for important dates such as birthdays or anniversaries, with personalized content or gift recommendations.',
  'An SMS notification system that integrates with event management platforms and sends real-time updates or changes for events.',
  'A push notification system using augmented reality technology provides real-time directions or navigation assistance.',
  'A notification system that integrates with social media platforms and sends alerts for new followers, comments, or interactions.',
  'An email notification system that sends reminders for recurring tasks such as bill payments or subscription renewals.',
  'A push notification system that uses natural language generation technology to create personalized content based on user preferences or interests.',
  'A notification system that integrates with restaurant or food delivery apps and sends real-time updates for order status or delivery times.',
  'An SMS notification system that integrates with transportation apps and sends real-time updates for public transportation schedules or delays.',
  'Building a notification aggregator that combines multiple channels into a single interface',
  'Developing a personalized notification system that uses machine learning to optimize content delivery',
  'Creating a chatbot that leverages notifications to engage with users proactively',
  'Integrating an augmented reality experience into push notifications to increase user engagement',
  'Developing a voice notification system that utilizes natural language processing for a more personalized experience',
  'Building a notification dashboard for businesses that provides real-time analytics on user engagement across multiple channels',
  'Creating a notification scheduling tool that automates the delivery of time-sensitive messages',
  'Developing a notification-based game that incentivizes user engagement with rewards',
  'Integrating blockchain technology into notification delivery to enhance security and reliability',
  'Creating a notification management tool that allows users to customize their preferences across multiple channels',
  'Developing a notification feedback system that allows users to rate the relevance and effectiveness of messages',
  'Building a notification notification system for healthcare providers that delivers personalized alerts and reminders to patients',
  'Creating a notification system for emergency response that delivers critical information to first responders and citizens in affected areas',
  'Developing a notification-based personal finance app that delivers insights and recommendations to users based on their spending habits',
  'Integrating social media platforms into a notification system to increase engagement and reach',
  'Building a notification system for schools that delivers updates and reminders to students and parents',
  'Creating a notification-based mental health app that provides mindfulness exercises and reminders for self-care',
  'Developing a notification system for logistics that provides real-time updates on package delivery and shipment tracking',
  'Building a notification-based smart home system that automates household tasks and provides alerts for security and safety',
  'Creating a notification system for weather alerts that delivers real-time updates and personalized recommendations for safety.',
  'Developing a notification system for sports fans that delivers live updates and personalized content during games.',
  'Creating a notification-based productivity tool that helps users manage their tasks and deadlines across multiple channels.',
  'Building a notification system for job seekers that delivers job listings and interview reminders.',
  'Developing a notification-based language learning app that delivers daily vocabulary and grammar exercises.',
  'Creating a notification system for travel that provides real-time updates on flight and hotel reservations.',
  'Integrating a virtual assistant into a notification system for hands-free interaction.',
  'Building a notification system for fitness enthusiasts that delivers workout reminders and personalized coaching.',
  'Developing a notification-based dating app that delivers matches and conversation prompts.',
  'Creating a notification system for musicians that delivers updates on new releases and tour dates.',
  'Building a notification system for charitable organizations that delivers updates on donations and volunteer opportunities.',
  'Developing a notification system for food delivery that delivers real-time updates on order status and delivery time.',
  'Creating a notification-based personal safety app that sends alerts in case of emergencies and provides safety tips.',
  'Building a notification system for e-commerce that delivers personalized product recommendations and deals.',
  'Developing a notification system for event organizers that sends updates on event details and schedules.',
  'Creating a notification-based news app that delivers personalized news updates and analysis.',
  'Building a notification system for real estate that delivers updates on new property listings and open houses.',
  'Developing a notification system for social networking that delivers updates on friend requests and messages.',
  'Creating a notification-based educational app that delivers lessons and quizzes on various topics.',
  'Building a notification system for automotive maintenance that sends reminders for oil changes, tire rotations, and other services.',
  'Developing a notification system for weather-sensitive industries that delivers real-time updates on weather patterns and alerts.',
];

export default TOPICS;
