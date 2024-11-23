import { useSetRecoilState } from "recoil";
import { submissionState } from "../atoms/submission";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_API_KEY
});

const Submission = () => {

    const setShowSubmission = useSetRecoilState(submissionState);

    console.log(import.meta.env.VITE_GITHUB_API_KEY);

    const handleClickOutside = (e) => {
        if (e.target.id === 'submission-overlay') {
            setShowSubmission(false);
        }
    }

    const handleSubmission = async () => {
        try{
            const github_url = document.querySelector('input[name="github_url"]').value;
            const category = document.querySelector('select[name="category"]').value;

            const data = await octokit.request('POST /repos/plon-Susk7/Job-Board/issues',{
                owner: 'plon-Susk7',
                repo: 'Job-Board',
                title: 'New Project Submission',
                body: `Project: ${github_url}\nCategory: ${category}`
            })

            if(data.status === 201){
                console.log('Issue created successfully');
                setShowSubmission(false);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div id="submission-overlay" onClick={handleClickOutside} className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="mb-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Submit a Project</h1>
                    <p className="text-sm text-gray-400">
                        Submit an open-source project to be featured on JobBoard
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-md font-bold text-gray-800 dark:text-white">GitHub Repository</h1>
                        <input
                            type="text"
                            name="github_url"
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                            placeholder="Enter GitHub URL"
                        />
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-gray-800 dark:text-white">Category</h1>
                        <select
                            name="category"
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <option value="GSOC">GSOC</option>
                            <option value="YC">YC</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <button onClick={handleSubmission} className="mt-2 w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-2 rounded-lg transition duration-200 hover:outline hover:outline-2 hover:outline-gray-400">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Submission;
