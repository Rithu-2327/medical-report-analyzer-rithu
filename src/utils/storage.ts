import { Report, TestResult } from '../types/medical';

const REPORTS_KEY = 'medical_reports';
const SETTINGS_KEY = 'app_settings';

export const storageUtils = {
  getReports: (): Report[] => {
    try {
      const data = localStorage.getItem(REPORTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading reports:', error);
      return [];
    }
  },

  saveReport: (report: Report): void => {
    try {
      const reports = storageUtils.getReports();
      reports.push(report);
      localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
    } catch (error) {
      console.error('Error saving report:', error);
    }
  },

  updateReport: (reportId: string, updatedResults: TestResult[]): void => {
    try {
      const reports = storageUtils.getReports();
      const index = reports.findIndex(r => r.id === reportId);
      if (index !== -1) {
        reports[index].results = updatedResults;
        localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
      }
    } catch (error) {
      console.error('Error updating report:', error);
    }
  },

  deleteReport: (reportId: string): void => {
    try {
      const reports = storageUtils.getReports();
      const filtered = reports.filter(r => r.id !== reportId);
      localStorage.setItem(REPORTS_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  },

  getSettings: () => {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      return data ? JSON.parse(data) : { darkMode: false, textSize: 'medium' };
    } catch (error) {
      return { darkMode: false, textSize: 'medium' };
    }
  },

  saveSettings: (settings: { darkMode: boolean; textSize: string }): void => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }
};
