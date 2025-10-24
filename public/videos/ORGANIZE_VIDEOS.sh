#!/bin/bash
# Script to organize videos for CubePay landing page

echo "🎬 Organizing CubePay Videos..."
echo ""

# Create cubepay directory if it doesn't exist
mkdir -p cubepay

# Copy relevant videos to cubepay folder
echo "📋 Copying payment demonstration videos..."

# Bank QR Payment
if [ -f "home/AR_QR_Code_Payment_Demonstration.mp4" ]; then
    cp "home/AR_QR_Code_Payment_Demonstration.mp4" "cubepay/bank-qr-payment.mp4"
    echo "✅ Copied bank-qr-payment.mp4"
fi

# D-Cube Crypto Payment
if [ -f "home/AR_Agent_Interaction_and_Payment.mp4" ]; then
    cp "home/AR_Agent_Interaction_and_Payment.mp4" "cubepay/d-cube-crypto-payment.mp4"
    echo "✅ Copied d-cube-crypto-payment.mp4"
fi

# Cross-chain routing
if [ -f "home/AR_Payment_Initiation_With_Phantom.mp4" ]; then
    cp "home/AR_Payment_Initiation_With_Phantom.mp4" "cubepay/cross-chain-routing.mp4"
    echo "✅ Copied cross-chain-routing.mp4"
fi

# AR World demo
if [ -f "home/AR_World_Video_Ready.mp4" ]; then
    cp "home/AR_World_Video_Ready.mp4" "cubepay/ar-world-payment.mp4"
    echo "✅ Copied ar-world-payment.mp4"
fi

# Bitcoin Lightning
if [ -f "home/Bitcoin_Lightning_Payment_AR_Video.mp4" ]; then
    cp "home/Bitcoin_Lightning_Payment_AR_Video.mp4" "cubepay/bitcoin-lightning.mp4"
    echo "✅ Copied bitcoin-lightning.mp4"
fi

# Restaurant payment
if [ -f "home/AR_Restaurant_Payment_Confirmation_Video.mp4" ]; then
    cp "home/AR_Restaurant_Payment_Confirmation_Video.mp4" "cubepay/restaurant-payment.mp4"
    echo "✅ Copied restaurant-payment.mp4"
fi

# Merged AR QR demo
if [ -f "home/agents arqr merge 3 vids.mp4" ]; then
    cp "home/agents arqr merge 3 vids.mp4" "cubepay/ar-qr-complete-demo.mp4"
    echo "✅ Copied ar-qr-complete-demo.mp4"
fi

echo ""
echo "✨ Done! Videos organized in cubepay folder"
echo "📁 Check: public/videos/cubepay/"
echo ""
echo "To see what was copied:"
echo "ls -lh cubepay/"
