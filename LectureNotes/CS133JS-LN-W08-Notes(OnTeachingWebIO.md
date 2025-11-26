<h1>Notes on teaching Web i/o</h1>



## Using `FormData` 

ProfBird: Are there advantages to using a form and formData object to get values from input elements on a web page when they are not bein send to a server?

GitHub Copilot: Yes. Using a form + FormData has benefits even when you’re not sending data to a server:

Pros
- Semantics and accessibility: submit/Enter works, labels and screen readers behave as expected.
- Built‑in validation: required, min/max, pattern, type checks, and browser error UI before your JS runs.
- Autofill/password managers: better integration on desktop and mobile (soft keyboard shows “Go/Done”).
- Less DOM plumbing: collect all named controls in one call; scales as the form grows (including files, repeated names).
- Future‑proofing: easy to later POST or serialize (URLSearchParams/JSON) without refactoring.

Gotchas
- Omitted fields: unchecked checkboxes, unselected radios, disabled inputs, and inputs without name are not in FormData.
- Types: everything is a string; you must coerce and handle NaN.
- For tiny forms, direct input.value lookups can be simpler and slightly cheaper.
- Less suited for reactive/live updates unless you also listen to input/change events.

Practical tips for your file
- Add native constraints to reduce JS checks (required, min, max).
- Coerce safely and handle missing keys.

Example: turning FormData into a typed object
````js
const fd = new FormData(myForm);
const data = Object.fromEntries(fd);
// Coerce types and set defaults
const birthYear = Number(data.birthyear);
const currentYear = Number(data.currentyear);
const hadBirthdayYet = data.birthday === 'no'; // unchecked radio may be undefined
````