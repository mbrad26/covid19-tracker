export const filterData = (query, data) =>
        data.filter(country =>
          country.country.toLowerCase().includes(query.toLowerCase()));
