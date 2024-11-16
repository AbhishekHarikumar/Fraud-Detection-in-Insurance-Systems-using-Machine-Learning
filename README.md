# Fraud Detection Model in Insurance Systems using Machine Learning

<h2 align="left">Executive Summary</h2>

<p align="justify"> Fraud Detection Model that utilizes machine learning to predict whether a claim is fraudulent or legitimate based on the given input. The model is deployed using Flask, along with a user-friendly UI interface that provides access to this functionality. It is trained using Extreme Gradient Boosting Trees, leveraging a wide range of randomly drawn data. The model is generalized with an accuracy of 83% and achieves a perfect balance between precision and recall for optimal performance. The RSA Cryptography Algorithm is implemented to ensure secure access to the model and prevent unauthorized usage. </p>

<h2 align = "left">Objective</h2>

<p align="justify"> To build a model that accurately classifies whether a prediction is fraudulent or not, ensuring authorized access.</p>

<h2 align = "left">Data Structure</h2>


<h2 align="left">Tech Stack</h2>

- Programming Language - Python  
- Development Environment - Jupyter Notebook  
- Version Control and Collaboration - GitHub  
- Data Analytics - Pandas, NumPy, Scikit-learn  
- Machine Learning - Logistic Regression, Decision Tree Classifier, Support Vector Classifier (SVC), K-Nearest Neighbors Classifier, XGBoost Classifier  
- Data Visualization - Matplotlib, Seaborn  
- Web Framework - Flask  
- Security - RSA  

<h2 align="left">Process Workflow</h2>

- <p align="justify">Conduct in-depth research on datasets available on the internet, with the goal of finding one that is diverse and large in categories and numbers, simulating real-world scenarios. The Insurance Fraud Detection Dataset on Kaggle satisfies these conditions.</p>

- <p align="justify">Perform Exploratory Data Analysis (Univariate, Bivariate, and Multivariate) on the data extracted from Kaggle to understand the data's metrics as follows:</p>

  - Missing Values (1000 records) - Replaced using IQR (Upper and Lower range)
  - Categorical Types (21 columns)
  - Continuous Types (18 columns)
  - Skewness
  - Outliers
  - Imbalance (No: 75%, Yes: 25%)

- <p align="justify">Remove unnecessary columns (based on correlation), address imbalance (using SMOTE), correct skewness (using Pearson's First Coefficient), and handle outliers (trimming) to prepare the data appropriately for model building, with 34 independent features and 1 dependent feature.</p>

- <p align="justify">Test models using the following machine learning algorithms, evaluating performance with a confusion matrix, accuracy, and F1 score. Hyperparameter tuning was performed using GridSearchCV to optimize each model's performance:</p>

  - Logistic Regression
  - Decision Tree Classifier
  - Support Vector Classifier (SVC)
  - K-Nearest Neighbors Classifier
  - XGBoost Classifier

- Calculate the cross-validation score to evaluate the performance of each model. Use the AUC-ROC curve and confusion matrix to visualize performance.

- Pickle the best-performing model.

- Develop a Flask framework integrated with the RSA Crypto Algorithm for authorized access.

<h2 align="left">Business Value</h2>

- <p align="justify"> Increased fraud security prevention by 20% by developing a secure insurance framework with RSA cryptography and  a  fraud detection model using Extreme Gradient Boosting Trees with an accuracy of 83%.</p>

- <p align="justify"> Developed and put into use a thorough fraud detection system user interface (UI) utilising Flask to provide  effective UI interaction to lower financial crime.</p>

- <p align="justify"> Published in the International Journal of Research Publication and Reviews(A+ Grade) contibuting to the community. </p>

<h2 align="left">References</h2>

- G. Kowshalya and M. Nandhini, “Predicting fraudulent claims in automobile insurance,” in Proc. 2nd Int. Conf. Inventive Commun. Comput. Technol. (ICICCT), Coimbatore, India, Apr. 2018, pp. 1338–1343.

- K. Supraja and S. J. Saritha, “Robust fuzzy rule-based technique to detect frauds in vehicle insurance,” in Proc. Int. Conf. Energy, Commun., Data Anal. Soft Comput. (ICECDS), Chennai, India, Aug. 2017, pp. 3734–3739.

- C. Sun, Q. Li, H. Li, Y. Shi, S. Zhang, and W. Guo, “Patient cluster divergence-based healthcare insurance fraudster detection,” IEEE Access, vol. 7, pp. 14162–14170, Dec. 2019.

- K. Vassiljeva, A. Tepljakov, E. Petlenkov, and E. Netsajev, “Computational intelligence approach for estimation of vehicle insurance risk level,” in Proc. Int. Joint Conf. Neural Netw. (IJCNN), May 2017, pp. 4073–4078.

- D. Muller and Y.-F. Te, “Insurance premium optimization using motor insurance policies: A business growth classification approach,” in Proc. IEEE Int. Conf. Big Data (Big Data), Dec. 2017, pp. 4154–4158.

- T. Chen and C. Guestrin, “XGBoost: A scalable tree boosting system,” in Proc. ACM Int. Conf. Knowl. Discovery Data Mining (SIGKDD), San Francisco, CA, USA, Aug. 2016, pp. 785–794.

- N. Dhieb, H. Ghazzai, H. Besbes, and Y. Massoud, “A very deep transfer learning model for vehicle damage detection and localization,” in Proc. 31st Int. Conf. Microelectron. (ICM), Cairo, Egypt, Dec. 2019, pp. 158–161.

- K. Supraja and S. J. Saritha, “Robust fuzzy rule-based technique to detect frauds in vehicle insurance,” in Proc. Int. Conf. Energy, Commun., Data Anal. Soft Comput. (ICECDS), Chennai, India, Aug. 2017, pp. 3734–3739.

- T. Badriyah, L. Rahmaniah, and I. Syarif, “Nearest neighbor and statistics method-based approach for detecting fraud in auto insurance,” in Proc. Int. Conf. Appl. Eng. (ICAE), Batam, Indonesia, Oct. 2018, pp. 1–5.

- J.-M. Long, Z.-F. Yan, Y.-L. Shen, W.-J. Liu, and Q.-Y. Wei, “Detection of epilepsy using MFCC-based features and XGBoost,” in Proc. 11th Int. Congr. Image Signal Process., Biomed. Eng. Informat. (CISP-BMEI), Beijing, China, Oct. 2018, pp. 1–4.

- [https://youtu.be/B4if20qDuZc?si=xfGx276NQD5ELUl3](https://youtu.be/B4if20qDuZc?si=xfGx276NQD5ELUl3)

