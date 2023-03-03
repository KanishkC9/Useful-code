  function imageFile() {
    return (
        <>
          <label
              for="files"
              style={{
                color: darkMode ? '#4adf79' : '#01874e',
                cursor: 'pointer',
              }}
              fontWeight="bold"
              fontSize="small"
            >
              Change Profile Picture
            </label>
            <input
              type="file"
              id="files"
              accept="image/png, image/gif, image/jpeg"
              style={{
                backgroundColor: 'transparent',
                color: darkMode ? '#4adf79' : '#01874e',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 550,
                visibility: 'hidden',
              }}
              onChange={async (e) => {
                const file = e.target.files[0];
                const formData = new FormData();
                e.target.value = '';
                formData.append('input_file', file, file.name);

                // try {
                //   const response = await WrappedAxios.post(
                //     `${USER_SOCIAL_LINK}/users/image`,
                //     formData,
                //     {
                //       headers: {
                //         'Content-Type': `application/form-data`,
                //       },
                //     }
                //   );

                //   console.log(response);
                // } catch (e) {
                //   alert(e.message);
                // }

                const tmpPath = URL.createObjectURL(file);
                document
                  .getElementById('profilePicture')
                  .setAttribute('src', tmpPath);
                setImageChosen(true);
              }}
            />

      </>

    )

  }
