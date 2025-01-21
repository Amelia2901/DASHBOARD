export const fetchCatalogs = async () => {
  try {
    const url = "https://ams.akikita.web.id/api/filter/battery";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.status != "success") {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCatalogDetails = async (batteryId) => {
  try {
    const url = `https://ams.akikita.web.id/api/filter/battery/${batteryId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.status != "success") {
      throw new Error(data.message);
    }

    return data.data[0];
  } catch (error) {
    throw error;
  }
};
