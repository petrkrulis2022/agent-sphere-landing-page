# CubePay Video Demonstrations

This is the centralized folder for all CubePay landing page videos.

## 📁 Folder Organization

All videos for the CubePay landing page should be placed in this `/public/videos/cubepay/` directory.

## 🎬 Required Videos & Mapping

### Core Payment Demos

Copy or move relevant videos from existing folders to here with these names:

1. **d-cube-crypto-payment.mp4**

   - Revolutionary 3D cube interface for cryptocurrency payments
   - Source: Consider `/videos/home/AR_Agent_Interaction_and_Payment.mp4` or similar

2. **bank-qr-payment.mp4**

   - Revolut QR code integration for fiat payments
   - Source: `/videos/home/AR_QR_Code_Payment_Demonstration.mp4` or `/videos/home/AR_QR_Code_Generation_and_Payment.mp4`

3. **voice-ai-payment.mp4**

   - Natural language voice payment commands
   - Source: Create new or adapt from existing demos

4. **virtual-terminal-security.mp4**

   - How card details stay private with VTI
   - Source: Create new or adapt from payment security demos

5. **cross-chain-routing.mp4**
   - Multi-chain payment routing demonstration
   - Source: `/videos/home/AR_Payment_Initiation_With_Phantom.mp4` or similar

### Onboarding Demos

6. **base-app-integration.mp4**

   - Base App wallet connection in one tap
   - Source: Create new or adapt from wallet connection demos

7. **crypto-onboarding.mp4**
   - DEKS wallet creation without seed phrases
   - Source: Create new or adapt from onboarding flows

### Additional Demos (Optional)

8. **ar-world-payment.mp4**

   - Source: `/videos/home/AR_World_Video_Ready.mp4`

9. **bitcoin-lightning.mp4**

   - Source: `/videos/home/Bitcoin_Lightning_Payment_AR_Video.mp4`

10. **restaurant-payment.mp4**
    - Source: `/videos/home/AR_Restaurant_Payment_Confirmation_Video.mp4`

## 🔄 Quick Copy Commands

To copy existing videos to this folder with new names:

```bash
# Example: Copy AR QR payment demo
cp /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/home/AR_QR_Code_Payment_Demonstration.mp4 /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/cubepay/bank-qr-payment.mp4

# Example: Copy AR Agent payment demo
cp /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/home/AR_Agent_Interaction_and_Payment.mp4 /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/cubepay/d-cube-crypto-payment.mp4

# Example: Copy cross-chain demo
cp /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/home/AR_Payment_Initiation_With_Phantom.mp4 /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/cubepay/cross-chain-routing.mp4
```

## 📺 Video Specifications

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) recommended
- **Aspect Ratio**: 16:9
- **Max File Size**: 50MB per video recommended for web performance
- **Frame Rate**: 30fps or 60fps
- **Duration**: 15-60 seconds recommended

## 🎯 Where Videos Are Used

Videos in this folder are displayed throughout the landing page:

- **Home Section**: Showcase videos (AR demos, payment flows)
- **How It Works**: D-Cube and cross-chain routing
- **Onboard to Crypto**: Base App integration, DEKS wallet creation
- **Private Payments**: Virtual terminal security
- All sections use the `VideoPlayer` component

## 📝 Current Video Files

Run this command to see what's currently in this folder:

```bash
ls -la /home/petrunix/agentsphere-landing-page/agent-sphere-landing-page/public/videos/cubepay/
```

## 🗑️ Old Folders (Can be cleaned up later)

Once videos are copied here, you can optionally clean up:

- `/videos/home/`
- `/videos/near-pay/`
- `/videos/my-ghost/`
- `/videos/digital-world-builder/`
- `/videos/home-security/`
- `/videos/social-ar-network/`
