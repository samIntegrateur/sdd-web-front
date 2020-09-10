import React, { FormEvent, useState } from 'react';
import { handleGraphQlQuery } from '../../shared/api/utils';
import { API_BASE_URL } from '../../shared/constants';

const TestUpload: React.FC = () => {


  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e) => {
    console.log('e.target.files[0]', e.target.files[0]);
    setImage(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (image) {
      const formData = new FormData();

      // formData.append("operations", "{\"query\":\"mutation uploadOfferPicture($picture: Upload!) {\\n uploadOfferPicture(picture: $picture)\\n}\"}");
      // formData.append("map", "{\"0\": [\"variables.picture\"]}");
      // formData.append("0", image);


      // https://stackoverflow.com/questions/59043021/how-do-i-upload-files-to-a-graphql-backend-implemented-using-graphql-upload-usin
      try {
        const query = {
          query: `
            mutation uploadOfferPicture($picture: Upload!) {
              uploadOfferPicture(picture: $picture)
            }
          `,
          variables: {
            picture: image,
          }
        };

        const map = {
          "0": ["variables.picture"]
        };

        formData.append("operations", JSON.stringify(query));
        formData.append("map", JSON.stringify(map));
        formData.append("0", image);

        const response = await fetch(`${API_BASE_URL}/graphql`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });

        console.log('response');

        const responseData = await response.json();

        console.log('responseData', responseData);


      } catch (e) {
        console.error(e);
      }

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="image" type="file" onChange={handleFileChange} />
      <button type="submit">
        upload image
      </button>
    </form>
  );
}

export default TestUpload;
