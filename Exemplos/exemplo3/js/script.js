let globalUsers = [],
  globalCountries = [],
  globalUserCountries = [];

async function start() {
  //await fetchUsers();
  //await fetchCountries();

  // console.time('promise');
  // await promiseUsers();
  // await promiseCountries();
  // console.timeEnd('promise');

  // const p1 = promiseUsers();
  // const p2 = promiseCountries();

  // console.time('promiseAll');
  // await Promise.all([p1, p2]);
  // console.timeEnd('promiseAll');

  hideSpinner();
  mergeUsersAndCountries();
  render();
}

function promiseUsers() {
  return new Promise(async (resolve, reject) => {
    await fetchUsers();

    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

function promiseCountries() {
  return new Promise(async (resolve, reject) => {
    await fetchCountries();

    setTimeout(() => {
      resolve();
    }, 6000);
  });
}

function hideSpinner() {
  const spinner = document.querySelector('#spinner');
  spinner.classList.add('hide');
}

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?results=100&seed=promise&nat=us,fr,au,br'
  );

  const json = await res.json();

  globalUsers = json.results.map(({ name, picture, nat }) => {
    return {
      userName: name.first,
      userPicture: picture.large,
      userCountry: nat,
    };
  });
}

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');

  const json = await res.json();

  globalCountries = json.map(({ flag, alpha2Code }) => {
    return {
      countryFlag: flag,
      countryCode: alpha2Code,
    };
  });
}

function mergeUsersAndCountries() {
  globalUsers.forEach((user) => {
    const foundCountry = globalCountries.find((country) => {
      return user.userCountry === country.countryCode;
    });

    globalUserCountries.push({ ...user, ...foundCountry });
  });
}

function render() {
  const divUsers = document.querySelector('#divUsers');

  divUsers.innerHTML = `
    <div class='row'>
      ${globalUserCountries
        .map(({ userPicture, userName, countryFlag }) => {
          return `
          <div class='col s6 m4 l3'>
            <div class='flex-row bordered'>
              <img class='avatar' src='${userPicture}' />
              <div class='flex-column'>
                <span>${userName}</span>
                <img class='flag' src='${countryFlag}' />
              </div>
            </div>
          </div>
        `;
        })
        .join('')}
    </div>  
  `;
}

start();
