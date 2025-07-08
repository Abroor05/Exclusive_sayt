export const getData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/list/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const getDataId = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/detail/?product_id=1",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const getMenuBars = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/categories/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
