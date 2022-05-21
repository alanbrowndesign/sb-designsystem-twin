import tw from 'twin.macro';

export const InputField = () => {
  return (
    <div>
      <label htmlFor='price' tw='block text-sm font-medium text-gray-700'>
        Price
      </label>
      <div tw='relative mt-1 rounded-md shadow-sm'>
        <div tw='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span tw='text-gray-500 sm:text-sm'>$</span>
        </div>
        <input
          type='text'
          name='price'
          id='price'
          tw='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          placeholder='0.00'
        />
        <div tw='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor='currency' tw='sr-only'>
            Currency
          </label>
          <select
            id='currency'
            name='currency'
            tw='h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500'
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};
