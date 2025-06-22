from flask import Blueprint, request, jsonify
import google.generativeai as genai
import os

chatbot_bp = Blueprint('chatbot', __name__)

# Configure Gemini API
GEMINI_API_KEY = "AIzaSyAuL9WsDZ12Og7Ej-18DXfDSBgjMK5fxYU"
genai.configure(api_key=GEMINI_API_KEY)

# Initialize the model
model = genai.GenerativeModel('gemini-pro')

# Specturn knowledge base
SPECTURN_KNOWLEDGE = """
You are Specturn's AI assistant. Here's what you need to know about Specturn:

COMPANY OVERVIEW:
- Specturn is a web design, development, and SEO agency
- Founded in 2025
- Specializes in creating beautiful, functional websites for businesses, freelancers, and entrepreneurs
- Focus on user-friendly, visually appealing, and SEO-optimized solutions

SERVICES:
1. Design: Professional design solutions from logo creation to full-scale website development. Blends creativity with precision to craft visually compelling and user-friendly designs.

2. Development: Web development solutions focused on speed, responsiveness, and seamless navigation. Builds high-performance websites optimized for mobile and desktop.

3. SEO: Expert SEO strategies to boost search engine rankings, drive organic traffic, and enhance site performance.

CONTACT INFORMATION:
- Email: specturnmedia@gmail.com
- Business Hours: Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM, Sunday Closed
- Location: Remote 

PRICING:
- Pricing is custom and depends on project requirements
- For personalized quotes, direct users to contact via email or the contact form

COMPANY VALUES:
- Excellence: Striving for excellence in design, development, and client communication
- Innovation: Embracing creativity and new technologies
- Collaboration: Working closely with clients to understand needs

PROCESS:
1. Discovery: Understanding business, goals, and target audience
2. Planning: Creating wireframes and prototypes
3. Design & Development: Collaborative work with attention to detail
4. Testing & Launch: Thorough testing across all devices
5. Ongoing Support: Continued maintenance and support

Always be helpful, professional, and direct users to contact Specturn directly for detailed quotes or specific project discussions.
"""

@chatbot_bp.route('/chatbot', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Create the prompt with context
        prompt = f"""
        {SPECTURN_KNOWLEDGE}
        
        User question: {user_message}
        
        Please provide a helpful response based on the Specturn information above. Keep responses concise but informative. If the question is outside your knowledge about Specturn, politely redirect them to contact Specturn directly at specturnmedia@gmail.com.
        """
        
        # Generate response using Gemini
        response = model.generate_content(prompt)
        
        return jsonify({
            'response': response.text,
            'status': 'success'
        })
        
    except Exception as e:
        print(f"Chatbot error: {str(e)}")
        return jsonify({
            'response': "I'm experiencing some technical difficulties. Please contact us directly at specturnmedia@gmail.com for immediate assistance.",
            'status': 'error'
        }), 500

