import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// using 7zip to u nzip files on Windows
// using unzip to unzip files on Mac OS
// 7zip can be installed on Mac Os using Homebrew: brew install p7zip

// This module will unzip any submissions downloaded from Moodle
// let submissionsPath = "/Volumes/GoogleDrive/My Drive/Courses/CIS195/2023-Fall/Labs"
let submissionsPath = "G:/My Drive/Courses/CS133JS/23F/Labs";
// let submissionsPath = "/Volumes/GoogleDrive/My Drive/Courses/CIS195/2023-Summer/TermProject"

// The downloaded submissions are expected to be in a file with a name like: 
// "CS 133JS Sp23 (Bird 41334)-Lab 6 Production Version-3803210.zip"
// The above zip file is expected to contain:
//     One or more .zip archives containing:
//         One or more web site folders.

// Unzip any submissions downloaded from Moodle into a new folder
unzipFiles(submissionsPath);

function unzipFiles(submissionsPath)
{
    // Loop through all zip files in the submissionsPath directory
    for (const fileName of fs.readdirSync(submissionsPath))
    {
        if (fileName.endsWith('.zip'))
        {
            const filePath = path.join(submissionsPath, fileName);
            const folderName = fileName.replace('.zip', '');
            const allSubmissionsFolder = cleanSubmissionFolderName(folderName);
            const allSubmissionsFolderPath = path.join(submissionsPath, allSubmissionsFolder);

            // Create the folder if it doesn't exist
            if (!fs.existsSync(allSubmissionsFolderPath))
            {
                fs.mkdirSync(allSubmissionsFolderPath);
            }

            // Unzip the file to the allSubmissionsFolderPath directory
            try
            {
                //check for windows os
                if (process.platform === "win32") // Windows
                {
                    const command = `7z x "${filePath}" -o"${allSubmissionsFolderPath}" -aoa`;
                    execSync(command);
                }
                else if (process.platform === "darwin") // Mac OS
                {
                    // using unzip on Mac OS
                    const command = `unzip -q "${filePath}" -d "${allSubmissionsFolderPath}"`;
                    execSync(command);
                }
            }
            catch (error)
            {
                console.log(`Error unzipping ${fileName}: ${error.message}`);
            }

            // Rename the unzipped student submission folders so they are like: TyTitan_file
            fs.readdirSync(allSubmissionsFolderPath).forEach((studentFolder) =>
            {
                const oldPath = path.join(allSubmissionsFolderPath, studentFolder);
                const newFolderName = studentFolder.replace(/\d*/g, '').replace(/ /g, '').replace(/_/g, '').replace('assignsubmission', '_');
                const newPath = path.join(allSubmissionsFolderPath, newFolderName);
                fs.renameSync(oldPath, newPath);
            });

            // Unzip any folders in each student folder
            fs.readdirSync(allSubmissionsFolderPath).forEach((studentFolder) =>
            {
                const studentFolderPath = path.join(allSubmissionsFolderPath, studentFolder);
                fs.readdirSync(studentFolderPath).forEach((fileName) =>
                {
                    if (fileName.endsWith('.zip'))
                    {
                        
                        const filePath = path.join(studentFolderPath, fileName);
                      /*  const folderName = fileName.replace('.zip', '');
                        const folderPath = path.join(studentFolderPath, folderName);

                        // Create the folder if it doesn't exist
                        if (!fs.existsSync(folderPath))
                        {
                            fs.mkdirSync(folderPath);
                        }
                        */
                        // Unzip the file to the folderPath directory
                        try
                        {
                            //check for windows os
                            if (process.platform === "win32") // Windows
                            {
                                const command = `7z x "${filePath}" -o"${studentFolderPath}" -aoa`;
                                execSync(command);
                            }
                            else if (process.platform === "darwin") // Mac OS
                            {
                                // using unzip on Mac OS
                                const command = `unzip -q "${filePath}" -d "${studentFolderPath}"`;
                                execSync(command);
                            }
                        }
                        catch (error)
                        {
                            console.log(`Error unzipping ${fileName}: ${error.message}`);
                        }

                        // Delete the zip file
                        fs.unlinkSync(filePath);
                    }
                });
            });
        }
    }

    // Create a name for the folder that will hold the unzipped submissions
    function cleanSubmissionFolderName(folderName)
    {
        // Clean up the folder name. Example of new name: CIS195_Su23Lab3Submissions
        folderName = folderName.replace(/\([^)]*\)/g, '');
        folderName = folderName.replace(/Version.*/g, '');
        folderName = folderName.replace(/-/g, '');
        folderName = folderName.replace(/ /, '');
        folderName = folderName.replace(/ /, '_');
        folderName = folderName.replace(/ /g, '');
        // remove the number following the word Submission and add s to the end
        folderName = folderName.replace(/\d+$/, 's');
        return folderName;
    }
}
