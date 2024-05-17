

async function fetchProfileData() {
    const url = 'https://github.com/Romano777777/Portf-lio-Romano/blob/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
