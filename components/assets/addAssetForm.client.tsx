'use client';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';

import formDataToJson from '@/utils/formDataToJson';

import Button from '../button';

const AddAssetForm = ({ userSelect }) => {
  const [addLoading, setAddLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAddLoading(true);
    const userData = formDataToJson(new FormData(e.currentTarget));

    // e.currentTarget.reset();
    fetch('/api/assets', {
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          console.log('success');
        } else {
          console.log('error');
        }
      })
      .finally(() => {
        setAddLoading(false);
        router.push('/');
      });
  };

  return (
    <>
      <form className="space-x-2 space-y-4 flex justify-center flex-col items-center px-4" onSubmit={handleSubmit}>
        {userSelect && <div className="w-full">{userSelect}</div>}
        <div className="w-full">
          <input required autoComplete="off" className="w-full" id="name" name="name" placeholder="Asset name" />
        </div>
        <div className="w-full">
          <input required autoComplete="off" className="w-full" id="ticker" name="ticker" placeholder="Ticker" />
        </div>
        <div className="w-full">
          <input
            required
            autoComplete="off"
            className="w-full"
            id="purchasePrice"
            min={0.01}
            name="purchasePrice"
            placeholder="Purchase Price"
            step="0.01"
            type="number"
          />
        </div>
        <div className="w-full">
          <input
            required
            autoComplete="off"
            className="w-full"
            id="quantity"
            min={1}
            name="quantity"
            placeholder="Quantity"
            type="number"
          />
        </div>

        <div className="w-full">
          <input autoComplete="off" className="w-full" min={1} name="stopLoss" placeholder="Stop loss" step={0.01} type="number" />
        </div>

        <div className="w-full">
          <input autoComplete="off" className="w-full" min={1} name="target" placeholder="Target" step={0.01} type="number" />
        </div>

        <div className="w-full">
          <details>
            <summary>Add Trigger</summary>
            <div className="mt-3 ml-3">
              <select className="w-full" defaultValue={''} name="trigger.triggerType">
                <option value="holding-period">Holding Period</option>
              </select>
            </div>
            <div className="mt-3 ml-3">
              <input autoComplete="off" className="w-full" name="trigger.days" placeholder="Holding period (days)" type="number" />
            </div>
          </details>
        </div>

        <Button block bg="red" loading={addLoading}>
          Add
        </Button>
      </form>
    </>
  );
};

export default AddAssetForm;
