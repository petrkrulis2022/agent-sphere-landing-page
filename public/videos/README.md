# Videos Directory

This directory contains all video assets for the Agent Sphere landing page, organized by section.

## Folder Structure

- `near-pay/` - Videos for NeAR Pay section
- `digital-world-builder/` - Videos for Digital World Builder section
- `social-ar-network/` - Videos for Social AR Network section
- `my-ghost/` - Videos for My Ghost section
- `home-security/` - Videos for Home Security section

## Supported Video Formats

- MP4 (recommended for web)
- WebM (for better compression)
- MOV (will be converted to MP4)

## Naming Convention

Use descriptive names for your video files:

- `feature-demo.mp4`
- `intro-animation.mp4`
- `product-showcase.mp4`

## Usage in Components

To use videos in your React components:

```tsx
import videoFile from "../assets/videos/near-pay/demo.mp4";

<video controls>
  <source src={videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>;
```
