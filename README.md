# Title

**Spotify Clone - Playlist and Feeds Integration**

## Objective

The goal of this assignment is to develop a front-end feature that mimics a Spotify-like playlist UI. You will create a single-page application (SPA) with a left-side menu, main playlist section, and an interactive video feed slider. This project will integrate APIs to fetch playlists and video feeds dynamically.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript/React
- **APIs**: REST API Integration
- **Deployment**: Netlify
- **Version Control**: GitHub

## Completion Instructions

### Functionality

#### Must Have

- Create a left menu showing playlists and feed objects.
- Implement a center section displaying playlists with the first video as the cover thumbnail.
- On clicking a playlist card, open a side slider to display the list of video items.
- Use the **`getAllPlayList`** API to fetch and display all available playlists.
- Display the total number of videos for each playlist.
- Bind each playlist name with the appropriate group of post IDs.

#### Nice to Have

- Include smooth UI/UX interactions for opening/closing the side slider.
- Make the layout responsive for both desktop and mobile devices.

### Guidelines to develop a project

#### Must Have

- Follow the provided **Figma design prototype** for layout inspiration:  
  [Figma Design](https://www.figma.com/proto/TxyrZ70tJvV6yiGm5mHedL/blaash-2?node-id=0-1)
- Implement the left menu, main section, and slider exactly as per the design.
- Use the **APIs** properly by ensuring the right request headers and body parameters.

#### Nice to Have

- Follow best practices for React component structure or JavaScript functions.
- Use modern CSS practices like Flexbox or Grid for layout management.

### Submission Instructions

#### Must Have

- Push your code to the following **GitHub repository**:  
  [GitHub Repository](https://github.com/akhilbhumireddy/spotifyclone.git)
- Ensure the deployed version is live at:  
  [Netlify Deployment](https://spotifycloneakhils.netlify.app)

#### Nice to Have

- Add inline comments explaining the logic of key functions.
- Attach a demo video or screenshots of the working project.

## Resources

### Design Files

- Use the following Figma design as a reference:  
  [Figma Design](https://www.figma.com/proto/TxyrZ70tJvV6yiGm5mHedL/blaash-2?node-id=0-1)

### APIs

#### API 1: Get All Playlists

- **Endpoint**:  
  `https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "Content_Type": 2
  }
  ```
- **Headers**:
  {
  X-Api-Key: MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5RyrX-Tenant-Key: TYKE070323
  }

- Description: Use this API to fetch the list of playlists and their associated post IDs.

### API 2: Get Feeds

**Endpoint**:
`https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1`

**Method**: POST
**Request Body**:
json
{
"Index": 1,
"ContentType": [2],
"IsTagged": false,
"URL": ""
}

**Headers**:
{
X-Api-Key: MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr  
 X-Tenant-Key: TYKE070323
}

- Description: This API fetches the individual video posts available in the feed.

### Third-party Packages:

- React: For frontend development.
- Axios or Fetch API: For API calls.
