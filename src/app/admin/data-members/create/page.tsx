export default function CreateMemberPage() {
    return (
      <main>
        <section>
          <h1 className="text-3xl md:text-4xl font-bold">Form Member</h1>
          <div className="py-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-500">
                  First name <strong>*</strong>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type first name"
                className="input input-bordered border-blue-500 text-blue-500 w-full"
              />
            </label>
  
            {/* Last Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-500">
                  Last name <strong>*</strong>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type last name"
                className="input input-bordered border-blue-500 text-blue-500 w-full"
              />
            </label>
  
            {/* Phone Number */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-500">
                  Phone number <strong>*</strong>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type phone number"
                className="input input-bordered border-blue-500 text-blue-500 w-full"
              />
            </label>
  
            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-500">
                  Email <strong>*</strong>
                </span>
              </div>
              <input
                type="email"
                placeholder="Type email"
                className="input input-bordered border-blue-500 text-blue-500 w-full"
              />
            </label>
  
            {/* Address - Full Width */}
            <label className="md:col-span-2 form-control w-full">
              <div className="label">
                <span className="label-text text-blue-500">
                  Address <strong>*</strong>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type address"
                className="input input-bordered border-blue-500 text-blue-500 w-full"
              />
            </label>
  
            {/* Submit Button - Full Width */}
            <button className="md:col-span-2 btn bg-blue-500 text-white w-full">
              Submit
            </button>
          </div>
        </section>
      </main>
    );
  }
  